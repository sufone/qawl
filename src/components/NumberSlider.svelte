<script>
	import {inputPage} from '../stores/page.js'

	function blankField() {
        document.getElementById("pageNumberInput").value = ''
	}

	$: if ($inputPage) {
		page = $inputPage
	}
	$: if (page > 0 && page < 605) {
		inputPage.set(page)
	}

	let page
</script>

	Current page: <input type="number" name="pageNumberInput" bind:value={page}
		id="pageNumberInput" max="604" min="1" title="Directly go to page…">
