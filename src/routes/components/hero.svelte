<script lang="ts">
	import Arrow from '$lib/components/icons/arrow.svelte';

	const scrollTo = (e: MouseEvent, id: string) => {
		e.preventDefault();
		const element = document.querySelector(id);
		console.log(element);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};
</script>

<div class="relative flex flex-col items-start justify-start py-5 text-start">
	<section class="flex flex-col items-start justify-start">
		<h1 class="text-secondary-foreground mb-6 text-5xl font-bold md:text-7xl">Matt Schroder</h1>

		<p class="text-muted-foreground mb-8 max-w-2xl text-xl md:text-2xl">
			Learn fast, learn often, fail forward
		</p>
		<div class="flex gap-4">
			<a href="mailto:matt@strukt.io">
				<button
					class="border-accent bg-accent/70 text-accent-foreground hover:bg-accent/80 cursor-pointer rounded-lg border px-8 py-2 shadow-xs"
				>
					Get in touch
				</button>
			</a>
			<a href="#projects" onclick={(e) => scrollTo(e, '#projects')}>
				<button
					class="group border-accent text-accent-foreground flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2"
				>
					Projects
					<Arrow
						class="stroke-accent-foreground h-5 w-5 rotate-0 transition-transform duration-300 group-hover:-rotate-45"
					/>
				</button>
			</a>
			<!-- <a href="#blog" onclick={(e) => scrollTo(e, '#blog')}>
				<button
					class="group border-accent text-accent-foreground flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 shadow-xs"
				>
					Blog
					<Arrow
						class="stroke-accent-foreground h-5 w-5 rotate-0 transition-transform duration-300 group-hover:-rotate-45"
					/>
				</button>
			</a> -->
		</div>
	</section>
</div>
