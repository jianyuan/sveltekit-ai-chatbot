<script lang="ts">
	// TODO
	const chats = [];
</script>

<div class="flex-1 overflow-auto">
	{#if chats.length}
		<div class="space-y-2 px-2">
			<!-- TODO: Chat history -->
		</div>
	{:else}
		<div class="p-8 text-center">
			<p class="text-sm text-muted-foreground">No chat history</p>
		</div>
	{/if}
</div>
