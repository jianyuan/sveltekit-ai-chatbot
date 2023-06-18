<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { IconGitHub, IconSpinner } from '$lib/components/ui/icons';
	import { cn } from '$lib/utils';
	import { signIn } from '@auth/sveltekit/client';

	export let text = 'Login with GitHub';
	export let showGithubIcon = true;

	let className: string | undefined | null = undefined;
	export { className as class };

	let isLoading = false;
</script>

<Button
	variant="outline"
	on:click={() => {
		isLoading = true;
		signIn('github', { callbackUrl: `/` });
	}}
	disabled={isLoading}
	class={cn(className)}
	{...$$restProps}
>
	{#if isLoading}
		<IconSpinner class="mr-2 animate-spin" />
	{:else if showGithubIcon}
		<IconGitHub class="mr-2" />
	{/if}
	{text}
</Button>
