<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { IconArrowElbow, IconPlus } from '$lib/components/ui/icons';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
	import type { UseChatHelpers } from 'ai/svelte';
	import { createEventDispatcher } from 'svelte';
	// @ts-ignore
	import autosize from 'svelte-autosize';

	const dispatch = createEventDispatcher<{ submit: string }>();

	export let isLoading: UseChatHelpers['isLoading'];
	export let input: UseChatHelpers['input'];

	async function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			await dispatch('submit', $input);
			$input = '';
		}
	}
</script>

<form
	on:submit={async (event) => {
		event.preventDefault();
		if ($input === '') {
			return;
		}
		await dispatch('submit', $input);
		$input = '';
	}}
>
	<div
		class="relative flex w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12"
	>
		<Tooltip>
			<TooltipTrigger>
				<Button
					href="/"
					target="_self"
					size="sm"
					variant="outline"
					class="absolute left-0 top-4 h-8 w-8 rounded-full bg-background p-0 sm:left-4"
				>
					<IconPlus />
					<span class="sr-only">New Chat</span>
				</Button>
			</TooltipTrigger>
			<TooltipContent>New Chat</TooltipContent>
		</Tooltip>
		<textarea
			use:autosize
			autofocus={true}
			tabindex={0}
			on:keydown={handleKeydown}
			rows={1}
			bind:value={$input}
			placeholder="Send a message."
			spellcheck={false}
			class="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
		/>
		<div class="absolute right-0 top-4 sm:right-4">
			<Tooltip>
				<TooltipTrigger>
					<Button type="submit" size="icon" disabled={$isLoading || $input === ''}>
						<IconArrowElbow />
						<span class="sr-only">Send message</span>
					</Button>
				</TooltipTrigger>
				<TooltipContent>Send message</TooltipContent>
			</Tooltip>
		</div>
	</div>
</form>
