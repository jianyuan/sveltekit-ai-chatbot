import { SvelteKitAuth } from '@auth/sveltekit';
import Credentials from '@auth/core/providers/credentials';

export const handle = SvelteKitAuth({
	providers: [
		Credentials({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
				password: { label: 'Password', type: 'password' }
			},
			async authorize() {
				return { id: '1', name: 'J Smith', email: 'jsmith@example.com' };
			}
		})
	]
});
