import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getChat } from '$lib/chat';

export const load: PageServerLoad = async ({ params, locals }) => {
	const session = await locals.getSession();
	if (!session?.user) {
		throw redirect(302, `/sign-in?redirect=/chat/${params.id}`);
	}

	const chat = await getChat(params.id, session.user.id);

	if (!chat) {
		throw error(404, 'Not found');
	}

	return { chat };
};
