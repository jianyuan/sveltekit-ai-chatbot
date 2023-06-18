<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { IconSpinner } from '$lib/components/ui/icons';
	import {
		AlertDialog,
		AlertDialogAction,
		AlertDialogCancel,
		AlertDialogContent,
		AlertDialogDescription,
		AlertDialogFooter,
		AlertDialogHeader,
		AlertDialogTitle,
		AlertDialogTrigger
	} from '$lib/components/ui/alert-dialog';
	import { goto } from '$app/navigation';

	let isOpen: boolean;
	let isPending = false;
</script>

<AlertDialog bind:open={isOpen}>
	<AlertDialogTrigger>
		<Button variant="ghost" disabled={isPending}>
			{#if isPending}
				<IconSpinner className="mr-2" />
			{/if}
			Clear history
		</Button>
	</AlertDialogTrigger>
	<AlertDialogContent>
		<AlertDialogHeader>
			<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
			<AlertDialogDescription>
				This will permanently delete your chat history and remove your data from our servers.
			</AlertDialogDescription>
		</AlertDialogHeader>
		<AlertDialogFooter>
			<AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
			<AlertDialogAction
				disabled={isPending}
				on:click={(event) => {
					event.preventDefault();

					// TODO: Clear chat history
					isPending = true;
					setTimeout(() => {
						isPending = false;

						isOpen = false;
						goto('/');
					}, 1000);
				}}
			>
				{#if isPending}
					<IconSpinner className="mr-2 animate-spin" />
				{/if}
				Delete
			</AlertDialogAction>
		</AlertDialogFooter>
	</AlertDialogContent>
</AlertDialog>
