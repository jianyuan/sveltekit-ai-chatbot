<script lang="ts">
	import { IconClose } from '$lib/components/ui/icons';
	import { cn } from '$lib/utils';
	import { Dialog as SheetPrimitive } from 'radix-svelte';
	import SheetOverlay from './SheetOverlay.svelte';
	import SheetPortal from './SheetPortal.svelte';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<SheetPortal>
	<SheetOverlay />
	<SheetPrimitive.Content
		class={cn(
			'fixed z-50 h-full border-r bg-background p-6 opacity-100 shadow-lg data-[state=closed]:animate-slide-to-left data-[state=open]:animate-slide-from-left',
			className
		)}
		{...$$restProps}
	>
		<slot />
		<SheetPrimitive.Close
			class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
		>
			<IconClose />
			<span class="sr-only">Close</span>
		</SheetPrimitive.Close>
	</SheetPrimitive.Content>
</SheetPortal>
