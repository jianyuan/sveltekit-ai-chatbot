<script lang="ts">
	import { cn } from '$lib/utils';
	import { Dialog as SheetPrimitive } from 'radix-svelte';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<SheetPrimitive.Portal class={cn('fixed inset-0 z-50 flex', className)} {...$$restProps}>
	<slot />
</SheetPrimitive.Portal>
