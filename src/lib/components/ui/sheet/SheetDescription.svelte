<script lang="ts">
	import { cn } from '$lib/utils';
	import { Dialog as SheetPrimitive } from 'radix-svelte';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<SheetPrimitive.Description class={cn('text-sm text-muted-foreground', className)} {...$$restProps}>
	<slot />
</SheetPrimitive.Description>
