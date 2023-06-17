<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<svg
	aria-label="Vercel logomark"
	role="img"
	viewBox="0 0 74 64"
	class={cn('h-4 w-4', className)}
	{...$$restProps}
>
	<path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z" fill="currentColor" />
</svg>
