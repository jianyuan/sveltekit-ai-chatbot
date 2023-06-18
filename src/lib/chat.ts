import type { Chat } from '$lib/types';
import { kv } from '@vercel/kv';

export async function getChats(userId?: string | null) {
	if (!userId) {
		return [];
	}

	try {
		const pipeline = kv.pipeline();
		const chats: string[] = await kv.zrange(`user:chat:${userId}`, 0, -1, {
			rev: true
		});

		for (const chat of chats) {
			pipeline.hgetall(chat);
		}

		const results = await pipeline.exec();

		return results as Chat[];
	} catch (error) {
		return [];
	}
}

export async function getChat(id: string, userId: string) {
	const chat = await kv.hgetall<Chat>(`chat:${id}`);

	if (!chat || (userId && `${chat.userId}` !== userId)) {
		return null;
	}

	return chat;
}
