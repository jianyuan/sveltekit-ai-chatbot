<script>
	import { page } from '$app/stores';
	import ClearHistory from '$lib/components/ClearHistory.svelte';
	import LoginButton from '$lib/components/LoginButton.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import SidebarFooter from '$lib/components/SidebarFooter.svelte';
	import SidebarList from '$lib/components/SidebarList.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import UserMenu from '$lib/components/UserMenu.svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import { IconGitHub, IconSeparator, IconSvelteChat, IconVercel } from '$lib/components/ui/icons';
	import { cn } from '$lib/utils';
</script>

<header
	class="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl"
>
	<div class="flex items-center">
		{#if $page.data.session}
			<Sidebar>
				<SidebarList />
				<SidebarFooter>
					<ThemeToggle />
					<ClearHistory />
				</SidebarFooter>
			</Sidebar>
		{:else}
			<a href="/" target="_blank" rel="nofollow">
				<IconSvelteChat class="mr-2 h-6 w-6 dark:hidden" inverted />
				<IconSvelteChat class="mr-2 hidden h-6 w-6 dark:block" />
			</a>
		{/if}
		<div class="flex items-center">
			<IconSeparator class="h-6 w-6 text-muted-foreground/50" />
			{#if $page.data.session}
				<UserMenu />
			{:else}
				<LoginButton variant="link" showGithubIcon={false} text="Login" class="-ml-2" />
			{/if}
		</div>
	</div>
	<div class="flex items-center justify-end space-x-2">
		<a
			target="_blank"
			href="https://github.com/jianyuan/sveltekit-ai-chatbot"
			rel="noopener noreferrer"
			class={cn(buttonVariants({ variant: 'outline' }))}
		>
			<IconGitHub />
			<span class="ml-2 hidden md:flex">GitHub</span>
		</a>
		<a
			href="https://github.com/jianyuan/sveltekit-ai-chatbot"
			target="_blank"
			class={cn(buttonVariants())}
		>
			<IconVercel class="mr-2" />
			<span class="hidden sm:block">Deploy to Vercel</span>
			<span class="sm:hidden">Deploy</span>
		</a>
	</div>
</header>
