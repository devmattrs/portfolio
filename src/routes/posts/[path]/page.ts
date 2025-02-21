import { getPost } from '$lib/posts';
import { compile } from 'mdsvex';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const post = await getPost(params.path);
	const content = await compile(post.content, {
		extensions: ['.md', '.svx', '.svelte.md']
	});
	return {
		post: {
			...post,
			content
		}
	};

}) satisfies PageLoad;