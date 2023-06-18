<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { IconArrowDown } from '$lib/components/ui/icons';
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };

	let isAtBottom = false;
	function handleScroll() {
		isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
	}
</script>

<svelte:window on:scroll={handleScroll} />

<Button
	variant="outline"
	size="icon"
	class={cn(
		'absolute right-4 top-1 z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-2',
		isAtBottom ? 'opacity-0' : 'opacity-100',
		className
	)}
	on:click={() =>
		window.scrollTo({
			top: document.body.offsetHeight,
			behavior: 'smooth'
		})}
	{...$$restProps}
>
	<IconArrowDown />
	<span class="sr-only">Scroll to bottom</span>
</Button>
