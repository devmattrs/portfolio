import { getPost } from '$lib/posts';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const post = await getPost(params.path);
	return { post };
}) satisfies PageLoad;