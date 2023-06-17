<script>
	import { cn } from '$lib/utils';
	import { buttonVariants } from '$lib/components/ui/button';
	import { IconGitHub, IconVercel } from '$lib/components/ui/icons';
</script>

<header
	class="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl"
>
	<div class="flex items-center">TODO</div>
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
