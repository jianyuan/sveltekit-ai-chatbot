<script lang="ts">
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import { Button } from '$lib/components/ui/button';
	import { IconArrowRight } from '$lib/components/ui/icons';
	import type { UseChatHelpers } from 'ai/svelte';

	export let input: UseChatHelpers['input'];

	const exampleMessages = [
		{
			heading: 'Explain technical concepts',
			message: `What is a "serverless function"?`
		},
		{
			heading: 'Summarize an article',
			message: 'Summarize the following article for a 2nd grader: \n'
		},
		{
			heading: 'Draft an email',
			message: `Draft an email to my boss about the following: \n`
		}
	];
</script>

<div class="mx-auto max-w-2xl px-4">
	<div class="rounded-lg border bg-background p-8">
		<h1 class="mb-2 text-lg font-semibold">Welcome to SvelteKit AI Chatbot!</h1>
		<p class="mb-2 leading-normal text-muted-foreground">
			This is an open source AI chatbot app template built with
			<ExternalLink href="https://kit.svelte.dev">SvelteKit</ExternalLink> and
			<ExternalLink href="https://vercel.com/storage/kv">Vercel KV</ExternalLink>
			.
		</p>
		<p class="leading-normal text-muted-foreground">
			You can start a conversation here or try the following examples:
		</p>
		<div class="mt-4 flex flex-col items-start space-y-2">
			{#each exampleMessages as message}
				<Button
					variant="link"
					class="h-auto p-0 text-base"
					on:click={() => ($input = message.message)}
				>
					<IconArrowRight class="mr-2 text-muted-foreground" />
					{message.heading}
				</Button>
			{/each}
		</div>
	</div>
</div>
