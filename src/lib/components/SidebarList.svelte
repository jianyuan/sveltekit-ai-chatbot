<script lang="ts">
	import SidebarActions from '$lib/components/SidebarActions.svelte';
	import SidebarItem from '$lib/components/SidebarItem.svelte';
	import type { Chat } from '$lib/types';

	export let chats: Chat[];

	const removeChat = void 0;
	const shareChat = void 0;
</script>

<div class="flex-1 overflow-auto">
	{#if chats.length}
		<div class="space-y-2 px-2">
			{#each chats as chat (chat.id)}
				<SidebarItem {chat}>
					<SidebarActions {chat} />
				</SidebarItem>
			{/each}
		</div>
	{:else}
		<div class="p-8 text-center">
			<p class="text-sm text-muted-foreground">No chat history</p>
		</div>
	{/if}
</div>
