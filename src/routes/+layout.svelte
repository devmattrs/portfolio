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
	import Background from './components/background.svelte';
	import Twitch from '$lib/components/icons/twitch.svelte';

	let { children } = $props();

	let theme = $state('dark');

	onMount(() => {
		const currentTheme = localStorage.getItem('theme');
		theme = currentTheme || 'dark';
		document.documentElement.setAttribute('data-theme', theme);
	});

	const toggleTheme = () => {
		const currentTheme = document.documentElement.getAttribute('data-theme');
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-theme', newTheme);
		localStorage.setItem('theme', newTheme);
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

	let socials = $derived([
		{
			icon: theme === 'dark' ? Moon : Sun,
			action: toggleTheme,
			label: 'Toggle theme',
			current: () => theme === 'dark'
		},
		// {
		// 	icon: Youtube,
		// 	href: 'https://youtube.com/@devmattrs',
		// 	label: 'YouTube'
		// },
		{
			icon: X,
			href: 'https://x.com/devmattrs',
			label: 'X (Twitter)'
		}
		// {
		// 	icon: Twitch,
		// 	href: 'https://www.twitch.tv/devmattrs',
		// 	label: 'Twitch'
		// }
	]);
</script>

<svelte:head>
	<title>Matt Schroder - Software Engineer</title>
	<meta name="description" content="Full Stack Engineer and Developer portfolio" />
</svelte:head>

<Background />
<div class=" top-8 left-8 z-20 mx-auto flex h-fit max-w-3xl gap-3 p-2 px-8 py-8 md:bottom-8">
	{#each socials as social}
		<a
			href={social.href}
			target="_blank"
			rel="noopener noreferrer"
			class="group relative transition-all duration-300 hover:scale-110"
		>
			<Button
				onclick={social.action ?? (() => {})}
				class="hover:bg-accent/10 text-accent-foreground rounded-xl p-2"
			>
				<social.icon class="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
			</Button>
		</a>
	{/each}
</div>

{@render children()}
