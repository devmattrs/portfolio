<script lang="ts">
	import { onMount } from 'svelte';
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

	onMount(() => {
		let time = 0;

		const animate = () => {
			time += 0.002;

			// Calculate gradient positions
			const x1 = Math.sin(time) * 50 + 50;
			const x2 = Math.cos(time) * 50 + 50;

			// Apply gradient directly to canvas element
			canvas.style.background = `linear-gradient(${time * 45}deg, 
				var(--background) 0%,
				var(--accent) 50%,
				var(--background) 100%)`;
			canvas.style.backgroundSize = '150% 150%';
			canvas.style.backgroundPosition = `${x1}% ${x2}%`;

			requestAnimationFrame(animate);
		};

		animate();
	});
</script>

<canvas
	bind:this={canvas}
	class="fixed inset-0 h-screen w-screen opacity-100 transition-colors duration-300 dark:opacity-15"
></canvas>
