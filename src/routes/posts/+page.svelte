<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div>
	{#each data.posts as post}
		<a
			href={`/posts/${post.path}`}
			class="text-secondary-foreground bg-accent cursor-pointer text-2xl font-bold"
		>
			<button>
				{post.meta.title}
			</button>
		</a>
	{/each}
</div>
