<script lang="ts">
	const projects = [
		{
			title: 'R.A.G. Chat Application',
			description:
				'A proof-of-concept chat application leveraging RAG (Retrieval-Augmented Generation) with Neo4j knowledge graph and OpenAI integration. Features OAuth2 authentication and intelligent query processing.',
			image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
			tags: ['Next.js', 'Neo4j', 'OpenAI', 'FastAPI', 'OAuth2']
		},
		{
			title: 'Strukt',
			description:
				'A comprehensive web application maintenance platform featuring automated deployments, invoicing, and custom mailing solutions. Built with enterprise-grade infrastructure and payment processing.',
			image: '/strukt.png',
			tags: ['Next.js', 'Golang', 'Terraform', 'AWS', 'Stripe'],
			link: 'https://strukt.io'
		},
		{
			title: 'Enterprise Data Pipeline',
			description:
				'Led migration from SSMS to a modern data pipeline, enabling process codification and automated scaling. Transformed XML-based workflows into maintainable, monitored processes.',
			image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
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
			image:
				'https://yt3.googleusercontent.com/xRzHwaQuYrg9O3wfj6t_JmCPe_xORuFFP9OvUIJot9J6uKX5sXITiS_sSJhoLxN0T1Pjp8PyJfQ=s160-c-k-c0x00ffffff-no-rj',
			tags: ['Python', 'OpenAI', 'GitHub API', 'CI/CD']
		}
	];
</script>

<section class="py-20">
	<h2 class="text-secondary-foreground mb-12 text-4xl font-bold">Projects</h2>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
		{#each projects as project}
			<div class="rounded-xl py-6 pr-6 backdrop-blur-sm transition-colors">
				<img
					src={project.image}
					alt={project.title}
					class="border-accent/30 mb-4 h-48 w-full rounded-xl border object-cover"
				/>
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
