<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	let { children, ...props }: HTMLButtonAttributes = $props();
</script>

<button {...props} class={`text-secondary-foreground ${props.class} cursor-pointer`}>
	{@render children?.()}
</button>
