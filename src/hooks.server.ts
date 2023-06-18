import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';

export const handle = SvelteKitAuth({
	providers: [
		// @ts-ignore
		GitHub({
			clientId: GITHUB_ID,
			clientSecret: GITHUB_SECRET
		})
	],
	callbacks: {
		async jwt({ token, profile }) {
			console.log('token', token);
			console.log('profile', profile);
			if (profile?.id) {
				token.id = profile.id;
				token.image = profile.picture;
			}
			return token;
		}
	},
	pages: {
		signIn: '/sign-in'
	}
});
