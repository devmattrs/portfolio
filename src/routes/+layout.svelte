<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/components/button.svelte';
	import Sun from '$lib/components/icons/sun.svelte';
	import Moon from '$lib/components/icons/moon.svelte';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	import '../app.css';
	import Youtube from '$lib/components/icons/youtube.svelte';
	import X from '$lib/components/icons/x.svelte';

	let { children } = $props();

	let theme = $state('dark');

	onMount(() => {
		const currentTheme = document.documentElement.getAttribute('data-theme');
		theme = currentTheme || 'dark';
	});

	const toggleTheme = () => {
		const currentTheme = document.documentElement.getAttribute('data-theme');
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-theme', newTheme);
		theme = newTheme;
	};

	onMount(() => {
		// Handle initial hash if present
		if (window.location.hash) {
			const element = document.querySelector(window.location.hash);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}

		// Listen for hash changes
		window.addEventListener('hashchange', (event) => {
			console.log('hashchange', window.location.hash);
			const element = document.querySelector(window.location.hash);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		});
	});
</script>

<svelte:head>
	<title>Matt Schroder - Software Engineer</title>
	<meta name="description" content="Full Stack Engineer and Developer portfolio" />
</svelte:head>

<div class="fixed top-8 right-8 z-20">
	<Button class="rounded-xl p-2" onclick={toggleTheme}>
		{#if theme === 'light'}
			<Sun class="h-6 w-6" />
		{:else}
			<Moon class="h-6 w-6" />
		{/if}
	</Button>
	<Button class="rounded-xl p-2">
		<Youtube class="h-6 w-6" />
	</Button>
	<Button class="rounded-xl p-2">
		<X class="h-5 w-5" />
	</Button>
</div>

{@render children()}
