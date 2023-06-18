<script lang="ts">
	import Chat from '$lib/components/Chat.svelte';
	import { nanoid } from '$lib/utils';

	const id = nanoid();
</script>

<Chat {id} />
