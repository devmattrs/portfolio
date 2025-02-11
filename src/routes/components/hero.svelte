<script lang="ts">
	import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
	import FadeIn from '$lib/components/local/fadein.svelte';
	import Background from './background.svelte';
	import { fly } from 'svelte/transition';
</script>

<div class="flex flex-col justify-center items-center min-h-screen text-center p-5 relative">
	<section class="min-h-[80vh] flex flex-col justify-center items-start">
		<div in:fly={{ y: 50, duration: 1000 }}>
			<h1 class="text-5xl md:text-7xl font-bold text-[#7c7a7a] mb-6">
				<span class="bg-clip-text text-transparent bg-gradient-to-r from-[#ff5d73] to-[#494949]">
					Full Stack Engineer
				</span>
				<br />& Developer
			</h1>

			<p class="text-xl md:text-2xl text-[#494949] mb-8 max-w-2xl">
				Building scalable applications and creating elegant solutions to complex problems.
				Passionate about clean code and modern technologies.
			</p>

			<div class="flex gap-4">
				<a
					href="#contact"
					class="px-8 py-3 bg-[#ff5d73] hover:bg-[#ff4d63] text-[#000000] rounded-lg transition-colors"
				>
					Get in touch
				</a>
				<a
					href="#projects"
					class="px-8 py-3 border border-[#ff5d73] text-[#ff5d73] hover:bg-[#ff5d73]/10 rounded-lg transition-colors"
				>
					View Projects
				</a>
			</div>
		</div>
	</section>

	<div class="mt-auto w-full absolute bottom-1 py-12">
		<div class="h-18 mx-auto w-fit">
			<DotLottieSvelte
				src="https://lottie.host/785dc1a3-fffd-4319-8100-128e3162447e/tfxmCKCHgi.lottie"
				autoplay
				loop
			/>
		</div>
	</div>
</div>

<style>
	:global(body) {
		font-family: 'kade', sans-serif;
	}
</style>
