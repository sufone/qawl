<script>
	import { inputPage } from "../stores/page.js";

	function blankField() {
		document.getElementById("pageNumberInput").value = "";
	}

	$: if ($inputPage) {
		page = $inputPage;
	}
	$: if (page > 0 && page < 605) {
		//this is why $inputPage is not bound directly, need a bit of control
		inputPage.set(page);
	}

	let page;
</script>

<input
	title="Drag to change page"
	class="slider"
	id="slider"
	type="range"
	bind:value={page}
	min="1"
	max="604"
/>

<style>
	#slider {
		direction: rtl;
		margin-bottom: .5rem;
		width: 100%;
	}
</style>
