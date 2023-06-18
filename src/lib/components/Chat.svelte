<script lang="ts">
	import ChatList from '$lib/components/ChatList.svelte';
	import ChatPanel from '$lib/components/ChatPanel.svelte';
	import EmptyScreen from '$lib/components/EmptyScreen.svelte';
	import { cn } from '$lib/utils';
	import { useChat, type Message } from 'ai/svelte';

	// TODO: Save in local storage
	let previewToken: string | null = null;

	export let id: string | undefined = undefined;
	export let initialMessages: Message[] | undefined = undefined;
	let className: string | undefined | null = undefined;
	export { className as class };

	const { messages, append, reload, stop, isLoading, input } = useChat({
		initialMessages,
		id,
		body: {
			id,
			previewToken
		}
	});
</script>

<div class={cn('pb-[200px] pt-4 md:pt-10', className)}>
	{#if $messages.length}
		<ChatList {messages} />
	{:else}
		<EmptyScreen {input} />
	{/if}
</div>

<ChatPanel {id} {isLoading} {stop} {append} {reload} {messages} {input} />
