<script lang="ts">
	import ButtonScrollToBottom from '$lib/components/ButtonScrollToBottom.svelte';
	import { Button } from '$lib/components/ui/button';
	import { IconRefresh, IconStop } from '$lib/components/ui/icons';
	import type { UseChatHelpers } from 'ai/svelte';
	import FooterText from '$lib/components/FooterText.svelte';
	import PromptForm from '$lib/components/PromptForm.svelte';

	export let id: string | undefined = undefined;
	export let isLoading: UseChatHelpers['isLoading'];
	export let stop: UseChatHelpers['stop'];
	export let append: UseChatHelpers['append'];
	export let reload: UseChatHelpers['reload'];
	export let messages: UseChatHelpers['messages'];
	export let input: UseChatHelpers['input'];
</script>

<div class="fixed inset-x-0 bottom-0 bg-gradient-to-b from-muted/10 from-10% to-muted/30 to-50%">
	<ButtonScrollToBottom />
	<div class="mx-auto sm:max-w-2xl sm:px-4">
		<div class="flex h-10 items-center justify-center">
			{#if $isLoading}
				<Button variant="outline" on:click={() => stop()} class="bg-background">
					<IconStop class="mr-2" />
					Stop generating
				</Button>
			{:else if $messages?.length > 0}
				<Button variant="outline" on:click={() => reload()} class="bg-background">
					<IconRefresh class="mr-2" />
					Regenerate response
				</Button>
			{/if}
		</div>
		<div
			class="space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4"
		>
			<PromptForm
				on:submit={async (event) => {
					await append({
						id,
						content: event.detail,
						role: 'user'
					});
				}}
				{input}
				{isLoading}
			/>
			<FooterText class="hidden sm:block" />
		</div>
	</div>
</div>
