<script lang="ts">
	const projects = [
		{
			title: 'Strukt Chat Application',
			description:
				'A proof-of-concept chat application leveraging RAG (Retrieval-Augmented Generation) with Neo4j knowledge graph and OpenAI integration. Features OAuth2 authentication and intelligent query processing.',
			image: '/strukt-chat.png',
			tags: ['Next.js', 'Neo4j', 'OpenAI', 'FastAPI', 'OAuth2']
		},
		{
			title: 'Strukt Marketing',
			description:
				'A comprehensive web application platform featuring automated deployments, invoicing, and custom mailing solutions. Built with enterprise-grade infrastructure and payment processing.',
			image: '/strukt.png',
			tags: ['Next.js', 'TS', 'Github Actions', 'AWS', 'Stripe'],
			link: 'https://strukt.io'
		},
		{
			title: 'Enterprise Data Pipeline',
			description:
				'Led migration from SSMS to a modern data pipeline, enabling process codification and automated scaling. Transformed XML-based workflows into maintainable, monitored processes.',
			image: '/datapipeline.png',
			tags: ['Python', 'PostgreSQL', 'FastAPI', 'Docker']
		},
		{
			title: 'Automated Release Notes',
			description:
				'Innovative LLM-powered system that automates release note generation by analyzing git commits, PRs, and ticket data, significantly reducing engineering overhead.',
			image: '/release-notes.png',
			tags: ['Python', 'OpenAI', 'GitHub API', 'CI/CD']
		},
		{
			title: 'SermonDone',
			description:
				'Innovative LLM-powered system that automates release note generation by analyzing git commits, PRs, and ticket data, significantly reducing engineering overhead.',
			tags: ['Python', 'OpenAI', 'GitHub API', 'CI/CD'],
			link: 'https://www.sermondone.com/'
		},
		{
			title: 'Exposure Essence',
			description:
				'A photography website for a local photographer. This is a complete overhaul of the existing website, with a cleaner design, better user experience, and cleaner galleries',
			tags: ['Python', 'OpenAI', 'GitHub API', 'CI/CD'],
			link: 'https://exposureessence.com'
		}
	];
</script>

<section id="projects" class="py-20">
	<h2 class="text-secondary-foreground mb-12 text-4xl font-bold">Projects</h2>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
		{#each projects as project}
			<div class="rounded-xl py-6 pr-6 backdrop-blur-sm transition-colors">
				{#if project.link}
					<div class="border-accent/30 mb-4 h-48 w-full overflow-hidden rounded-xl border">
						<iframe src={project.link} title={project.title} class="h-full w-full" loading="lazy">
						</iframe>
					</div>
				{:else}
					<img
						src={project.image}
						alt={project.title}
						class="border-accent/30 mb-4 h-48 w-full rounded-xl border object-cover"
					/>
				{/if}
				{#if project.link}
					<a
						href={project.link}
						target="_blank"
						class="text-secondary-foreground mb-2 text-xl font-bold"
					>
						<span class="text-secondary-foreground/50">View Project</span>
					</a>
				{/if}
				<h3 class="text-secondary-foreground mb-2 text-xl font-bold">{project.title}</h3>
				<p class="text-muted-foreground mb-4">{@html project.description}</p>
				<div class="flex flex-wrap gap-2">
					{#each project.tags as tag}
						<span
							class="text-secondary-foreground/50 hover:bg-secondary/60 bg-secondary/50 rounded-full px-3 py-1 text-sm"
						>
							{tag}
						</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
