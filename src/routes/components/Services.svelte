<script lang="ts">
	const services = [
		{
			title: 'Full Stack Development',
			description:
				'End-to-end development of web applications using modern technologies and best practices.',
			icon: '💻'
		},
		{
			title: 'Cloud Architecture',
			description:
				'Design and implementation of scalable cloud solutions using AWS and modern infrastructure.',
			icon: '☁️'
		},
		{
			title: 'API Development',
			description: 'Building robust and scalable APIs with focus on performance and security.',
			icon: '🔌'
		}
	];
</script>

<section class="py-20">
	<h2 class="text-4xl font-bold text-[#7c7a7a] mb-12">Services</h2>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each services as service}
			<div
				class="p-6 bg-[#111111]/30 backdrop-blur-sm rounded-xl hover:bg-[#111111]/40 transition-colors"
			>
				<div class="text-4xl mb-4">{service.icon}</div>
				<h3 class="text-xl font-bold text-[#7c7a7a] mb-2">{service.title}</h3>
				<p class="text-[#494949]">{service.description}</p>
			</div>
		{/each}
	</div>
</section>
