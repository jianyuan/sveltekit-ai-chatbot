<script lang="ts">
	import { cn } from '$lib/utils';

	export let inverted = false;

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<svg
	viewBox="0 0 17 17"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	class={cn('h-4 w-4', className)}
	{...$$restProps}
>
	<path
		d="M1 16L2.58314 11.2506C1.83084 9.74642 1.63835 8.02363 2.04013 6.39052C2.4419 4.75741 3.41171 3.32057 4.776 2.33712C6.1403 1.35367 7.81003 0.887808 9.4864 1.02289C11.1628 1.15798 12.7364 1.8852 13.9256 3.07442C15.1148 4.26363 15.842 5.83723 15.9771 7.5136C16.1122 9.18997 15.6463 10.8597 14.6629 12.224C13.6794 13.5883 12.2426 14.5581 10.6095 14.9599C8.97637 15.3616 7.25358 15.1692 5.74942 14.4169L1 16Z"
		fill={inverted ? 'black' : 'white'}
		stroke={inverted ? 'black' : 'white'}
		stroke-width={2}
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
