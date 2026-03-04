/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import { XMLParser } from 'fast-xml-parser';

export default {
	async fetch(request, env, ctx) {
		const corsHeaders = {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
			'Access-Control-Max-Age': '86400',
			'Access-Control-Allow-Headers': 'Content-Type',
		};

		// Handle CORS preflight requests
		if (request.method === 'OPTIONS') {
			return new Response(null, { headers: corsHeaders });
		}

		try {
			// 1. Fetch the Substack RSS feed
			const SUBSTACK_URL = 'https://nhringstad.substack.com/feed';
			const rssResponse = await fetch(SUBSTACK_URL);
			
			if (!rssResponse.ok) {
				throw new Error(`Failed to fetch RSS: ${rssResponse.statusText}`);
			}
			
			const xmlData = await rssResponse.text();

			// 2. Parse the XML
			const parser = new XMLParser({
				ignoreAttributes: false,
				attributeNamePrefix: '@_',
			});
			const jsonObj = parser.parse(xmlData);
			
			// Extract items (handle both single item and array)
			let items = jsonObj.rss?.channel?.item || [];
			if (!Array.isArray(items)) {
				items = [items];
			}

			// 3. Process each post and call Roboflow
			const processPost = async (item) => {
				const title = item.title;
				const link = item.link;
				const description = item.description || '';
				const pubDate = item.pubDate;
				
				// Find the image URL. Substack usually puts it in enclosure or media:content
				let imageUrl = null;
				if (item.enclosure && item.enclosure['@_url']) {
					imageUrl = item.enclosure['@_url'];
				} else if (item['media:content'] && item['media:content']['@_url']) {
					imageUrl = item['media:content']['@_url'];
				}

				let roboflowData = null;

				// If we have an image, run inference
				if (imageUrl && env.ROBOFLOW_API_KEY) {
					try {
						// Format: https://detect.roboflow.com/[model]/[version]?api_key=...&image=...
						// Based on user provided details, we need the model ID. 
						// They didn't provide a model ID, just the API key, but let's assume a generic one or they will provide it via env vars
						const modelId = env.ROBOFLOW_MODEL_ID || 'subject-detection';
						const modelVersion = env.ROBOFLOW_MODEL_VERSION || '1';
						
						const inferenceUrl = `https://detect.roboflow.com/${modelId}/${modelVersion}?api_key=${env.ROBOFLOW_API_KEY}&image=${encodeURIComponent(imageUrl)}`;
						
						const roboResponse = await fetch(inferenceUrl);
						
						if (roboResponse.ok) {
							const roboJson = await roboResponse.json();
							// We only care about the best prediction or center coordinates
							if (roboJson.predictions && roboJson.predictions.length > 0) {
								roboflowData = roboJson.predictions[0];
								// We get x, y, width, height (center of the bounding box)
							}
						} else {
							console.error("Roboflow inference error", err);
						}
					} catch (e) {
						console.error("Error calling Roboflow:", e);
					}
				}

				return {
					title,
					link,
					description,
					pubDate,
					imageUrl,
					roboflowData
				};
			};

			// Process only top 6 to avoid hitting limits or timing out
			const topItems = items.slice(0, 6);
			const processedItems = await Promise.all(topItems.map(processPost));

			return new Response(JSON.stringify(processedItems), {
				headers: {
					...corsHeaders,
					'Content-Type': 'application/json',
				},
			});

		} catch (error) {
			return new Response(JSON.stringify({ error: error.message }), {
				status: 500,
				headers: {
					...corsHeaders,
					'Content-Type': 'application/json',
				},
			});
		}
	},
};
