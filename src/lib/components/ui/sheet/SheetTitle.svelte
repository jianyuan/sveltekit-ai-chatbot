<script lang="ts">
	import { cn } from '$lib/utils';
	import { Dialog as SheetPrimitive } from 'radix-svelte';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<SheetPrimitive.Title
	class={cn('text-lg font-semibold text-foreground', className)}
	{...$$restProps}
>
	<slot />
</SheetPrimitive.Title>
