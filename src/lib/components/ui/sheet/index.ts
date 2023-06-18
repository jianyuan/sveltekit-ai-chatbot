import { Dialog as SheetPrimitive } from 'radix-svelte';

export { default as SheetContent } from './SheetContent.svelte';
export { default as SheetDescription } from './SheetDescription.svelte';
export { default as SheetFooter } from './SheetFooter.svelte';
export { default as SheetHeader } from './SheetHeader.svelte';
export { default as SheetOverlay } from './SheetOverlay.svelte';
export { default as SheetPortal } from './SheetPortal.svelte';
export { default as SheetTitle } from './SheetTitle.svelte';

export const Sheet = SheetPrimitive.Root;
export const SheetTrigger = SheetPrimitive.Trigger;
export const SheetClose = SheetPrimitive.Close;
