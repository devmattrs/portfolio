<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/components/button.svelte';
	import Sun from '$lib/components/icons/sun.svelte';
	import Moon from '$lib/components/icons/moon.svelte';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	import '../app.css';

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

<Button class="bg-background fixed top-8 right-8 z-20 rounded-xl p-2" onclick={toggleTheme}>
	{#if theme === 'light'}
		<Sun />
	{:else}
		<Moon />
	{/if}
</Button>

{@render children()}
