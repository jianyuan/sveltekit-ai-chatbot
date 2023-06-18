<script lang="ts">
	import ChatMessageActions from '$lib/components/ChatMessageActions.svelte';
	import { IconOpenAI, IconUser } from '$lib/components/ui/icons';
	import { cn } from '$lib/utils';
	import type { Message } from 'ai';

	export let message: Message;
</script>

<div class={cn('group relative mb-4 flex items-start md:-ml-12')} {...$$restProps}>
	<div
		class={cn(
			'flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow',
			message.role === 'user' ? 'bg-background' : 'bg-primary text-primary-foreground'
		)}
	>
		{#if message.role === 'user'}
			<IconUser />
		{:else}
			<IconOpenAI />
		{/if}
	</div>
	<div class="ml-4 flex-1 space-y-2 overflow-hidden px-1">
		{message.content}
	</div>
	<ChatMessageActions {message} />
</div>
