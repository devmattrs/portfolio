<script lang="ts">
	const projects = [
		{
			title: 'Cloud Portfolio',
			description: 'A modern portfolio website built with SvelteKit and deployed on AWS using SST.',
			image: '/images/portfolio.webp',
			tags: ['SvelteKit', 'AWS', 'SST', 'TailwindCSS'],
			link: '#'
		},
		{
			title: 'E-commerce Platform',
			description:
				'Full-stack e-commerce solution with real-time inventory and payment processing.',
			image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
			tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
			link: '#'
		},
		{
			title: 'AI Content Generator',
			description: "AI-powered content generation tool using OpenAI's GPT-4 API.",
			image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
			tags: ['React', 'OpenAI', 'Node.js', 'MongoDB'],
			link: '#'
		}
	];
</script>

<section id="projects" class="py-20">
	<h2 class="text-4xl font-bold text-[#7c7a7a] mb-12">Featured Projects</h2>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		{#each projects as project}
			<div
				class="group relative bg-[#111111]/50 rounded-xl overflow-hidden backdrop-blur-sm
               hover:transform hover:scale-105 transition-all duration-300"
			>
				<img src={project.image} alt={project.title} class="w-full h-48 object-cover" />
				<div class="p-6">
					<h3 class="text-xl font-bold text-[#7c7a7a] mb-2">{project.title}</h3>
					<p class="text-[#494949] mb-4">{project.description}</p>
					<div class="flex gap-2 flex-wrap">
						{#each project.tags as tag}
							<span class="px-3 py-1 bg-[#ff5d73]/20 text-[#ff5d73] rounded-full text-sm">
								{tag}
							</span>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
