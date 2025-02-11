<script lang="ts">
	const companies = [
		{
			name: 'AWS',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
			link: 'https://aws.amazon.com'
		},
		{
			name: 'Microsoft',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
			link: 'https://microsoft.com'
		},
		{
			name: 'Google Cloud',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Google_Cloud_Logo.svg',
			link: 'https://cloud.google.com'
		}
	];
</script>

<section class="py-20">
	<h2 class="text-4xl font-bold text-white mb-12">Trusted By</h2>

	<div class="flex flex-wrap justify-center gap-12 opacity-70">
		{#each companies as company}
			<a
				href={company.link}
				class="grayscale hover:grayscale-0 transition-all duration-300"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={company.logo} alt={company.name} class="h-12 object-contain" />
			</a>
		{/each}
	</div>
</section>
