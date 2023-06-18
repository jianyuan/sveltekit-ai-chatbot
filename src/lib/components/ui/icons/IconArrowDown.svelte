<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 256 256"
	fill="currentColor"
	class={cn('h-4 w-4', className)}
	{...$$restProps}
>
	<path
		d="m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32Z"
	/>
</svg>
