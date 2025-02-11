<script lang="ts">
	import { fly, fade } from 'svelte/transition';

	function flyAndFade(node: HTMLElement, { y, duration }: { y: number; duration: number }) {
		const fl = fly(node, { y, duration });
		const fa = fade(node, { duration });
		return {
			delay: 0,
			duration,
			css: (t: number) => {
				const flyStyle = fl && fl.css ? fl.css(t, 0) : '';
				const fadeStyle = fa && fa.css ? fa.css(t, 0) : '';
				return `${flyStyle}; ${fadeStyle}`;
			}
		};
	}
</script>

<div transition:flyAndFade={{ y: 20, duration: 500 }}>
	<slot></slot>
</div>

<style>
	div {
		overflow: hidden; /* Ensures content doesn't overflow during transition */
	}
</style>
