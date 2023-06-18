<script>
	import { browser } from '$app/environment';
	import Header from '$lib/components/Header.svelte';
	import { resolvedTheme } from '$lib/theme';
	import '@fontsource/inter';
	import '@fontsource/jetbrains-mono';
	import '../app.postcss';

	if (browser) {
		resolvedTheme.subscribe((value) => {
			document.documentElement.classList.remove('light', 'dark');
			document.documentElement.classList.add(value);
		});
	}
</script>

<Header />
<main class="flex flex-col flex-1 bg-muted/50">
	<slot />
</main>
