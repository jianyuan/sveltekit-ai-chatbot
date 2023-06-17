<script>
	import '@fontsource/inter';
	import '@fontsource/jetbrains-mono';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<Header />
	<slot />
</div>
