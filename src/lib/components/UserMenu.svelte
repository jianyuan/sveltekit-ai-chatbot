<script lang="ts">
	import { page } from '$app/stores';
	import { IconExternalLink } from '$lib/components/ui/icons';
	import { cn } from '$lib/utils';
	import { Menu, MenuButton, MenuItem, MenuItems } from '@rgossiaux/svelte-headlessui';
	import Button from './ui/button/Button.svelte';
	import { signOut } from '@auth/sveltekit/client';

	function getUserInitials(name: string) {
		const [firstName, lastName] = name.split(' ');
		return lastName ? `${firstName[0]}${lastName[0]}` : firstName.slice(0, 2);
	}
</script>

<div class="flex items-center justify-between">
	<Menu class="relative">
		<MenuButton>
			<Button variant="ghost" class="pl-0">
				{#if $page.data.session?.user?.image}
					<img
						class="h-6 w-6 select-none rounded-full ring-1 ring-zinc-100/10 transition-opacity duration-300 hover:opacity-80"
						src={$page.data.session?.user?.image ? `${$page.data.session?.user?.image}&s=60` : ''}
						alt={$page.data.session?.user?.name ?? 'Avatar'}
					/>
				{:else}
					<div
						class="flex h-7 w-7 shrink-0 select-none items-center justify-center rounded-full bg-muted/50 text-xs font-medium uppercase text-muted-foreground"
					>
						{$page.data.session?.user?.name
							? getUserInitials($page.data.session?.user?.name)
							: null}
					</div>
				{/if}
				<span class="ml-2">{$page.data.session?.user?.name}</span>
			</Button>
		</MenuButton>
		<MenuItems
			class={cn(
				'absolute',
				'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
				'w-[180px] mt-2'
			)}
		>
			<MenuItem let:active>
				<div
					class={cn(
						'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
						active ? 'bg-accent text-accent-foreground' : null,
						'flex-col items-start'
					)}
				>
					<div class="text-xs font-medium">{$page.data.session?.user?.name}</div>
					<div class="text-xs text-zinc-500">{$page.data.session?.user?.email}</div>
				</div>
			</MenuItem>
			<div class="-mx-1 my-1 h-px bg-muted" />
			<MenuItem let:active>
				<a
					href="https://jianyuan.io"
					target="_blank"
					rel="noopener noreferrer"
					class={cn(
						'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
						active ? 'bg-accent text-accent-foreground' : null,
						'inline-flex items-center justify-between w-full text-xs'
					)}
				>
					jianyuan.IO
					<IconExternalLink className="w-3 h-3 ml-auto" />
				</a>
			</MenuItem>
			<MenuItem let:active>
				<a
					href="https://vercel.com"
					target="_blank"
					rel="noopener noreferrer"
					class={cn(
						'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
						active ? 'bg-accent text-accent-foreground' : null,
						'inline-flex items-center justify-between w-full text-xs'
					)}
				>
					Vercel Homepage
					<IconExternalLink className="w-3 h-3 ml-auto" />
				</a>
			</MenuItem>
			<MenuItem let:active>
				<a
					href="/"
					class={cn(
						'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
						active ? 'bg-accent text-accent-foreground' : null,
						'inline-flex items-center justify-between w-full text-xs'
					)}
					on:click={(event) => {
						event.preventDefault();
						signOut({ callbackUrl: '/' });
					}}
				>
					Log Out
				</a>
			</MenuItem>
		</MenuItems>
	</Menu>
</div>
