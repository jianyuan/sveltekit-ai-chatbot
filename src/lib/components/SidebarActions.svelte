<script lang="ts">
	import { goto } from '$app/navigation';
	import {
		AlertDialog,
		AlertDialogAction,
		AlertDialogCancel,
		AlertDialogContent,
		AlertDialogDescription,
		AlertDialogFooter,
		AlertDialogHeader,
		AlertDialogTitle
	} from '$lib/components/ui/alert-dialog';
	import { Button } from '$lib/components/ui/button';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogFooter,
		DialogHeader,
		DialogTitle
	} from '$lib/components/ui/dialog';
	import { IconShare, IconSpinner, IconTrash, IconUsers } from '$lib/components/ui/icons';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
	import type { Chat } from '$lib/types';
	import { cn, formatDate } from '$lib/utils';
	import { badgeVariants } from '$lib/components/ui/badge';

	export let chat: Chat;

	let isShareDialogOpen = false;
	let isSharePending = false;

	let isDeleteDialogOpen = false;
	let isRemovePending = false;
</script>

<div class="space-x-1">
	<Tooltip>
		<TooltipTrigger>
			<Button
				variant="ghost"
				class="h-6 w-6 p-0 hover:bg-background"
				on:click={() => (isShareDialogOpen = true)}
			>
				<IconShare />
				<span class="sr-only">Share</span>
			</Button>
		</TooltipTrigger>
		<TooltipContent>Share chat</TooltipContent>
	</Tooltip>
	<Tooltip>
		<TooltipTrigger>
			<Button
				variant="ghost"
				class="h-6 w-6 p-0 hover:bg-background"
				disabled={isRemovePending}
				on:click={() => (isDeleteDialogOpen = true)}
			>
				<IconTrash />
				<span class="sr-only">Delete</span>
			</Button>
		</TooltipTrigger>
		<TooltipContent>Delete chat</TooltipContent>
	</Tooltip>

	<Dialog bind:open={isShareDialogOpen}>
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Share link to chat</DialogTitle>
				<DialogDescription>
					Anyone with the URL will be able to view the shared chat.
				</DialogDescription>
			</DialogHeader>
			<div class="space-y-1 rounded-md border p-4 text-sm">
				<div class="font-medium">{chat.title}</div>
				<div class="text-muted-foreground">
					{formatDate(chat.createdAt)} · {chat.messages.length} messages
				</div>
			</div>
			<DialogFooter class="items-center">
				{#if chat.sharePath}
					<a
						href={chat.sharePath}
						class={cn(badgeVariants({ variant: 'secondary' }), 'mr-auto')}
						target="_blank"
					>
						<IconUsers class="mr-2" />
						{chat.sharePath}
					</a>
				{/if}
				<Button
					disabled={isSharePending}
					on:click={() => {
						// TODO: Implement sharing
					}}
				>
					{#if isSharePending}
						<IconSpinner class="mr-2 animate-spin" />
						Copying...
					{:else}
						Copy link
					{/if}
				</Button>
			</DialogFooter>
		</DialogContent>
	</Dialog>

	<AlertDialog bind:open={isDeleteDialogOpen}>
		<AlertDialogContent>
			<AlertDialogHeader>
				<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
				<AlertDialogDescription>
					This will permanently delete your chat message and remove your data from our servers.
				</AlertDialogDescription>
			</AlertDialogHeader>
			<AlertDialogFooter>
				<AlertDialogCancel disabled={isRemovePending}>Cancel</AlertDialogCancel>
				<AlertDialogAction
					disabled={isRemovePending}
					on:click={async (event) => {
						event.preventDefault();

						// TODO: Implement message deletion

						isDeleteDialogOpen = false;
						goto('/', { invalidateAll: true });
						// TODO: Toast
					}}
				>
					{#if isRemovePending}
						<IconSpinner class="mr-2 animate-spin" />
					{/if}
					Delete
				</AlertDialogAction>
			</AlertDialogFooter>
		</AlertDialogContent>
	</AlertDialog>
</div>
