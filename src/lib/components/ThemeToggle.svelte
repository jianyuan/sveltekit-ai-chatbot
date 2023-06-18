<script lang="ts">
	import { browser } from '$app/environment';
	import { Button } from '$lib/components/ui/button';
	import { IconMoon, IconSun } from '$lib/components/ui/icons';
	import { resolvedTheme, theme } from '$lib/theme';
</script>

<Button
	variant="ghost"
	size="icon"
	on:click={(event) => {
		event.preventDefault();
		if ($resolvedTheme === 'dark') {
			theme.set('light');
		} else {
			theme.set('dark');
		}
	}}
>
	{#if $resolvedTheme === 'dark'}
		<IconMoon class="transition-all" />
	{:else}
		<IconSun class="transition-all" />
	{/if}
	<span class="sr-only">Toggle theme</span>
</Button>
