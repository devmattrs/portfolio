<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { compile } from 'mdsvex';

	let { data }: { data: PageData } = $props();

</script>

<main class="relative mx-auto mt-12 min-h-screen max-w-3xl px-6 py-12 md:px-6">
	{#await data.post.content}
		<div>Loading...</div>
	{:then data.post.content}
		{@render data.post.content.component()}
	{/await}
</main>
