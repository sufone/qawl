<script>
	import { inputPage } from "../stores/page.js";
	console.log("inputpage from page.svelte: " + $inputPage);

	let left, right;
	$: {
		//processing so the right page gets set on the right side, pun intended
		if ($inputPage % 2 === 0) {
			left = $inputPage;
			right = $inputPage - 1;
		} else {
			left = $inputPage + 1;
			right = $inputPage;
		}
	}

	import { zoomStore } from "../stores/settings.js";

	$: zoom = $zoomStore + "%";
	// export let zoom = "40%"
</script>

<div class="quran-wrapper" style="--zoom: {zoom}">
	<img
		alt="Page {left} of the Madina mushaf"
		src="../public/mushaf/{left}.png"
	/>
	<img
		alt="Page {right} of the Madina mushaf"
		src="../public/mushaf/{right}.png"
	/>
</div>

<style>
	.quran-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		max-width: var(--zoom);
		margin-right: auto;
		margin-left: auto;
		transition: max-width 100ms ease;
		background-color: transparent;
	}
	img {
		max-width: 50%;
		height: auto;
		/* filter: invert(1) */
	}
</style>
