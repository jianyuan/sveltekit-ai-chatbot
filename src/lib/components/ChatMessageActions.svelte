<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { IconCheck, IconCopy } from '$lib/components/ui/icons';
	import { cn } from '$lib/utils';
	import type { Message } from 'ai';
	// @ts-ignore
	import CopyToClipboard from 'svelte-copy-to-clipboard';

	export let message: Message;

	let className: string | undefined | null = undefined;
	export { className as class };

	let isCopied = false;

	function handleCopied() {
		isCopied = true;
		setTimeout(() => {
			isCopied = false;
		}, 2000);
	}
</script>

<div
	class={cn(
		'flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-10 md:-top-2 md:opacity-0',
		className
	)}
	{...$$restProps}
>
	<CopyToClipboard text={message.content} on:copy={handleCopied} let:copy>
		<Button variant="ghost" size="icon" on:click={copy}>
			{#if isCopied}
				<IconCheck />
			{:else}
				<IconCopy />
			{/if}
			<span class="sr-only">Copy message</span>
		</Button>
	</CopyToClipboard>
</div>
