import { kv } from '$lib/kv';
import { nanoid } from '$lib/utils';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge';

import { env } from '$env/dynamic/private';
// You may want to replace the above with a static private env variable
// for dead-code elimination and build-time type-checking:
// import { OPENAI_API_KEY } from '$env/static/private'

import type { RequestHandler } from './$types';

export const POST = (async ({ request, locals: { getSession } }) => {
	const json = await request.json();
	const { messages, previewToken } = json;
	const session = await getSession();

	// Create an OpenAI API client
	const config = new Configuration({
		apiKey: previewToken || env.OPENAI_API_KEY
	});
	const openai = new OpenAIApi(config);

	// Ask OpenAI for a streaming chat completion given the prompt
	const response = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages,
		temperature: 0.7,
		stream: true
	});

	// Convert the response into a friendly text-stream
	const stream = OpenAIStream(response, {
		async onCompletion(completion) {
			const title = messages[0].content.substring(0, 100);
			const userId = session?.user?.id;
			if (userId) {
				const id = json.id ?? nanoid();
				const createdAt = Date.now();
				const path = `/chat/${id}`;
				const payload = {
					id,
					title,
					userId,
					createdAt,
					path,
					messages: [
						...messages,
						{
							content: completion,
							role: 'assistant'
						}
					]
				};
				await kv.hmset(`chat:${id}`, payload);
				await kv.zadd(`user:chat:${userId}`, {
					score: createdAt,
					member: `chat:${id}`
				});
			}
		}
	});

	// Respond with the stream
	return new StreamingTextResponse(stream);
}) satisfies RequestHandler;
