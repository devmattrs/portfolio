<script lang="ts">
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
			Fail fast, fail often, fail forward
		</p>

		<div class="flex gap-4">
			<a href="mailto:matt@strukt.io">
				<button
					class="border-accent bg-accent/70 text-accent-foreground hover:bg-accent/80 rounded-lg border px-8 py-2 shadow-xs transition-colors"
				>
					Get in touch
				</button>
			</a>
			<a href="#projects" onclick={(e) => scrollTo(e, '#projects')}>
				<button
					class="border-accent text-accent-foreground hover:bg-accent/80 rounded-lg border px-8 py-2 shadow-xs transition-colors"
				>
					View Projects
				</button>
			</a>
		</div>
	</section>
</div>
