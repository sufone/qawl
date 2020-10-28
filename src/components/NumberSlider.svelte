<script>
	import {inputPage} from '../stores/page.js'

	function blankField() {
        document.getElementById("pageNumberInput").value = ''
	}

	$: if ($inputPage) {
		page = $inputPage
	}
	$: if (page > 0 && page < 605) { //this is why $inputPage is not bound directly, need a bit of control
		inputPage.set(page)
	}

	let page
</script>

<input id="slider" type=range bind:value={page} min=1 max=604>

Current page: <input type="number" name="pageNumberInput" bind:value={page}
	id="pageNumberInput" max="604" min="1" title="Directly go to page…">

<style>
	#slider {
		direction: rtl;
	}
</style>