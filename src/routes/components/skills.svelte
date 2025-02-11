<script lang="ts">
	const services = [
		{
			title: 'Modern Web Architecture',
			description:
				'Led migrations to modern tech stacks including <strong>SvelteKit</strong>, <strong>Next.js</strong>, and <strong>C# Web API</strong>. Experience with both monolithic and microservice architectures, focusing on scalability and maintainability.',
			icon: '🏗️'
		},
		{
			title: 'DevOps & Infrastructure',
			description:
				'Expert in <strong>Kubernetes</strong> deployments with custom Helm charts. Designed and maintained CI/CD pipelines using <strong>GitHub Actions</strong>, <strong>Octopus</strong>, and <strong>AWS</strong>. Experience with infrastructure as code using <strong>Terraform</strong>.',
			icon: '🔄'
		},
		{
			title: 'Data Engineering & Automation',
			description:
				'Built robust data pipelines using <strong>Python</strong>, <strong>PostgreSQL</strong>, and <strong>FastAPI</strong>. Experience with data scraping (<strong>BeautifulSoup</strong>), ORM frameworks (<strong>SQLAlchemy</strong>, <strong>Entity Framework</strong>), and process automation.',
			icon: '📊'
		},
		{
			title: 'AI Integration & Tools',
			description:
				'Implemented <strong>RAG systems</strong> with <strong>Neo4j</strong> and <strong>OpenAI</strong>. Developed LLM-powered tools for automating development workflows, including intelligent release note generation from git data.',
			icon: '🤖'
		},
		{
			title: 'API Development',
			description:
				'Extensive experience building and integrating APIs across platforms. Developed custom integrations with <strong>Confluence</strong>, <strong>Jira</strong>, and <strong>OAuth2</strong> providers. Proficient in both REST and GraphQL architectures.',
			icon: '🔌'
		}
	];
</script>

<section class="py-20">
	<h2 class="text-secondary-foreground mb-12 text-4xl font-bold">Skills</h2>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
		{#each services as service}
			<div class="rounded-xl py-6 pr-6 backdrop-blur-sm transition-colors">
				<div class="mb-4 text-4xl">{service.icon}</div>
				<h3 class="text-secondary-foreground mb-2 text-xl font-bold">{service.title}</h3>
				<p class="text-muted-foreground">{@html service.description}</p>
			</div>
		{/each}
	</div>
</section>
