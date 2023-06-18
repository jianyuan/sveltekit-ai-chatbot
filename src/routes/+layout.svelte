<script lang="ts">
	import { browser } from '$app/environment';
	import Header from '$lib/components/Header.svelte';
	import { TooltipProvider } from '$lib/components/ui/tooltip';
	import { resolvedTheme } from '$lib/theme';
	import '@fontsource/inter';
	import '@fontsource/jetbrains-mono';
	import '../app.postcss';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
	const { chats } = data;

	if (browser) {
		resolvedTheme.subscribe((value) => {
			document.documentElement.classList.remove('light', 'dark');
			document.documentElement.classList.add(value);
		});
	}
</script>

<TooltipProvider>
	<Header {chats} />
	<main class="flex flex-col flex-1 bg-muted/50">
		<slot />
	</main>
</TooltipProvider>
