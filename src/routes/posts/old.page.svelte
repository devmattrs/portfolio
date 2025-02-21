<script lang="ts">
	import type { PageProps } from './$types';
	import Arrow from '$lib/components/icons/arrow.svelte';

	let { data }: PageProps = $props();
</script>

<main class="relative mx-auto mt-12 min-h-screen max-w-3xl px-6 py-12 md:px-6">
	<h1 class="text-secondary-foreground mb-12 text-5xl font-bold">Blog Posts</h1>

	<div class="grid gap-8">
		{#each data.posts as post}
			<article class="group rounded-xl py-6 pr-6 backdrop-blur-sm transition-colors">
				<a href={`/posts/${post.path}`} class="flex flex-col gap-2">
					<div class="flex items-center gap-4">
						<h2 class="text-secondary-foreground text-xl font-semibold">{post.meta.title}</h2>
						<Arrow
							class="stroke-accent h-5 w-5 rotate-0 transition-transform duration-300 group-hover:-rotate-45"
						/>
					</div>
					<time class="text-muted-foreground text-sm">{post.meta.date}</time>
					<p class="text-muted-foreground">{post.meta.description}</p>
					<div class="mt-2 flex flex-wrap gap-2">
						{#if post.meta.tags}
							{#each post.meta.tags as tag}
								<span
									class="text-secondary-foreground/60 bg-accent-foreground/10 rounded-full px-3 py-1 text-sm"
								>
									{tag}
								</span>
							{/each}
						{/if}
					</div>
				</a>
			</article>
		{/each}
	</div>
</main>
