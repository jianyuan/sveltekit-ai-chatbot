<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import { IconMessage, IconUsers } from '$lib/components/ui/icons';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
	import type { Chat } from '$lib/types';
	import { cn } from '$lib/utils';

	export let chat: Chat;

	const isActive = $page.params.id === chat.id;
</script>

<div class="relative">
	<div class="absolute left-2 top-1 flex h-6 w-6 items-center justify-center">
		{#if chat.sharePath}
			<Tooltip>
				<TooltipTrigger tabindex={-1} class="focus:bg-muted focus:ring-1 focus:ring-ring">
					<IconUsers class="mr-2" />
				</TooltipTrigger>
				<TooltipContent>This is a shared chat.</TooltipContent>
			</Tooltip>
		{:else}
			<IconMessage class="mr-2" />
		{/if}
	</div>
	<Button
		href={chat.path}
		variant="ghost"
		class={cn('group w-full pl-8 pr-16', isActive && 'bg-accent')}
	>
		<div
			class="relative max-h-5 flex-1 select-none overflow-hidden text-ellipsis break-all"
			title={chat.title}
		>
			<span class="whitespace-nowrap">{chat.title}</span>
		</div>
	</Button>
	{#if isActive}
		<div class="absolute right-2 top-1">
			<slot />
		</div>
	{/if}
</div>
