export const getPosts = async () => {
	const posts = import.meta.glob('/src/posts/*.{md,svx,mdx}');
	const iterablePosts = Object.entries(posts);

	const allPosts = await Promise.all(
		iterablePosts.map(async ([path, resolver]) => {
			const { metadata } = await resolver() as { metadata: Record<string, unknown> };
			const postPath = path.replace(/^\/src\/posts\//, '').replace(/\.(md|svx|mdx)$/, '');

			return {
				meta: metadata,
				path: postPath,
			};
		})
	);

	return allPosts;
}

export const getPost = async (path: string) => {
	const posts = import.meta.glob(`/src/posts/*.{md,svx,mdx}`);
	const [, resolver] = Object.entries(posts).find(([key]) => key.includes(path))!;
	const { metadata, default: content } = await resolver() as { metadata: Record<string, unknown>, default: string };

	return {
		meta: metadata,
		path: path,
		content: content,
	};
}