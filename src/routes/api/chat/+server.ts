import { OpenAIStream, StreamingTextResponse } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge';

import { env } from '$env/dynamic/private';
// You may want to replace the above with a static private env variable
// for dead-code elimination and build-time type-checking:
// import { OPENAI_API_KEY } from '$env/static/private'

import type { RequestHandler } from './$types';

export const POST = (async ({ request }) => {
	const { messages, previewToken } = await request.json();

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
			// TODO
		}
	});

	// Respond with the stream
	return new StreamingTextResponse(stream);
}) satisfies RequestHandler;
