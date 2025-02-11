<script lang="ts">
	import Hero from './components/hero.svelte';
	import Projects from './components/projects.svelte';
	import Skills from './components/skills.svelte';
	import Companies from './components/companies.svelte';
	import Button from '$lib/components/button.svelte';
	import Sun from '$lib/components/icons/sun.svelte';
	import Moon from '$lib/components/icons/moon.svelte';
	import { onMount } from 'svelte';

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
</script>

<main class="relative z-10 mx-auto mt-12 min-h-screen max-w-2xl px-6 py-12 md:px-6 md:px-8">
	<Button class="bg-background fixed top-8 right-8 z-10 rounded-xl p-2" onclick={toggleTheme}>
		{#if theme === 'light'}
			<Sun />
		{:else}
			<Moon />
		{/if}
	</Button>
	<Hero />
	<Skills />
	<Projects />
	<!-- <Companies /> -->
</main>
