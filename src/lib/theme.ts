import { browser } from '$app/environment';
import { derived, writable } from 'svelte/store';

export type Theme = 'system' | 'light' | 'dark';

// TODO: Add a way to persist the theme in local storage
// TODO: Add a way to watch for system theme changes

export const theme = writable<Theme>('system');

export const resolvedTheme = derived(theme, ($theme) => {
	if ($theme === 'system') {
		if (!browser) return 'light';
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
		return systemTheme === 'dark' ? 'dark' : 'light';
	}
	return $theme;
});
