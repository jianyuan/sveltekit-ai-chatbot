<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<svg
	fill="none"
	shape-rendering="geometricPrecision"
	stroke="currentColor"
	stroke-linecap="round"
	stroke-linejoin="round"
	stroke-width="1"
	viewBox="0 0 24 24"
	aria-hidden="true"
	class={cn('h-4 w-4', className)}
	{...$$restProps}
>
	<path d="M16.88 3.549L7.12 20.451" />
</svg>
