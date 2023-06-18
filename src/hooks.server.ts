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
			if (profile?.id) {
				token.id = `${profile.id}`;
				token.image = profile.picture;
			}
			return token;
		},
		async session({ session, token }) {
			if (session.user && typeof token.id === 'string') {
				session.user.id = token.id;
			}
			return session;
		}
	},
	pages: {
		signIn: '/sign-in'
	}
});
