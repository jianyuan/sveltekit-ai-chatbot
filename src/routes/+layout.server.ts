import { getChats } from '$lib/chat';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const session = await event.locals.getSession();
	const chats = getChats(session?.user.id);

	return {
		session,
		chats
	};
};
