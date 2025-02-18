<script lang="ts">
	import Arrow from '$lib/components/icons/arrow.svelte';

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
			tags: ['Next.js', 'TS', 'Github Actions', 'AWS'],
			link: 'https://strukt.io'
		},
		{
			title: 'Enterprise Data Pipeline',
			description:
				'Led migration from SSMS to a modern data pipeline, enabling process codification and automated scaling. Transformed XML-based workflows into maintainable, monitored processes.',
			image: '/datapipeline.png',
			tags: ['Python', 'PostgreSQL', 'FastAPI', 'Microservices', 'Kubernetes']
		},
		{
			title: 'Automated Release Notes',
			description:
				'Innovative LLM-powered system that automates release note generation by analyzing git commits, PRs, and ticket data, significantly reducing engineering overhead.',
			image: '/release-notes.png',
			tags: ['Python', 'OpenAI', 'GraphQL', 'Github Actions']
		},
		{
			title: 'Metadata Management System',
			description:
				'A system for managing metadata for a large number of files. This is a web application that allows analysts to view and interact with the data warehouse.',
			image: '/metadata-management.png',
			tags: ['C#', '.NET', 'Snowflake', 'Sveltekit', 'TailwindCSS']
		},
		{
			title: 'SermonDone',
			description:
				'Innovative LLM-powered system that automates release note generation by analyzing git commits, PRs, and ticket data, significantly reducing engineering overhead.',
			tags: ['Next.js', 'OpenAI', 'Vercel', 'Stripe'],
			link: 'https://www.sermondone.com/'
		},
		{
			title: 'Exposure Essence',
			description:
				'A photography website for a local photographer. This is a complete overhaul of the existing website, with a cleaner design, better user experience, and cleaner galleries',
			tags: ['Python', 'OpenAI', 'GraphQL', 'Azure'],
			link: 'https://exposureessence.com'
		}
	];
</script>

<section id="projects" class="py-16">
	<h2 class="text-secondary-foreground mb-12 text-4xl font-bold">Projects</h2>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
		{#each projects as project}
			<div class="rounded-xl py-6 pr-6 backdrop-blur-sm transition-colors">
				<!-- {#if project.link}
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
				{/if} -->

				<div class="">
					<a
						href={project.link}
						target="_blank"
						class="text-secondary-foreground group mb-2 flex flex-row items-center gap-5 text-lg"
					>
						<h3 class="text-secondary-foreground text-xl font-bold">{project.title}</h3>
						{#if project.link}
							<Arrow
								class="stroke-accent h-6 w-6 rotate-0 transition-transform duration-300 group-hover:-rotate-45"
							/>
						{/if}
					</a>
				</div>
				<p class="text-muted-foreground mb-4">{@html project.description}</p>
				<div class="flex flex-wrap gap-2">
					{#each project.tags as tag}
						<span
							class="text-secondary-foreground/60 bg-accent-foreground/10 rounded-full px-3 py-1 text-sm"
						>
							{tag}
						</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
