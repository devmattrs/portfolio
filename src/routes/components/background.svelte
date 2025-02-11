<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { tick } from 'svelte';

	let props = $props();
	let strokeWidth = 1;

	let canvas: HTMLCanvasElement;

	// Function to generate random positions
	function getRandomPosition(maxX: number, maxY: number) {
		return {
			x: Math.random() * maxX,
			y: Math.random() * maxY
		};
	}

	// Function to animate paths
	async function animatePaths() {
		while (true) {
			for (let path of paths) {
				const { x, y } = getRandomPosition(100, 100); // Adjust maxX and maxY as needed
				path.transform = `translate(${x}, ${y})`;
			}
			await tick(); // Wait for the next frame
			await new Promise((resolve) => setTimeout(resolve, 1000)); // Adjust the delay as needed
		}
	}

	let paths = [
		{ d: 'M350.01,146.5l1395,792L350.01,146.5Z', transform: '' },
		{ d: 'M190.01,473.5L1249.81,2,190.01,473.5Z', transform: '' },
		{ d: 'M226.01,784.5l1695.5-221.21L226.01,784.5Z', transform: '' },
		{ d: 'M641.01,1010.5L1025.13,2l-384.12,1008.5Z', transform: '' },
		{ d: 'M1.51,863.28L681.01,81.5,1.51,863.28Z', transform: '' },
		{ d: 'M1517.34,2L1.51,91.85,1517.34,2Z', transform: '' },
		{ d: 'M401.76,2L1.51,325.62,401.76,2Z', transform: '' },
		{ d: 'M1899.01,742.5l-884,281,884-281Z', transform: '' }
	];

	animatePaths();
</script>

<svg
	id="uuid-8ab95e7a-1764-4095-b83e-2ffbd898077f"
	data-name="Layer 2"
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 1923.33 1083"
	{...props}
>
	<g id="uuid-59ab644d-007d-4ee2-ad37-c744f2f70cc1" data-name="Layer 1">
		{#each paths as { d, transform }}
			<path
				{d}
				fill="#fff"
				stroke="#000"
				stroke-miterlimit="10"
				stroke-width={strokeWidth}
				{transform}
			/>
		{/each}
		<line
			x1="1921.51"
			y1="433.41"
			x2="1547.21"
			y2="1082"
			fill="#fff"
			stroke="#000"
			stroke-miterlimit="10"
			stroke-width={strokeWidth}
		/>
		<line
			x1="1690.07"
			y1="2"
			x2="1921.51"
			y2="511.33"
			fill="#fff"
			stroke="#000"
			stroke-miterlimit="10"
			stroke-width={strokeWidth}
		/>
	</g>
</svg>
