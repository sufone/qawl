<script>
	import {inputPage} from '../stores/page.js'

	function increment(){
		inputPage.update(p => p += 2)
	}
	function decrement() {
		inputPage.update(p => p -= 2)
	}

	$: if ($inputPage) { // this duplicate ./NumberSlider, to optimize in the future
		page = $inputPage
	}
	$: if (page > 0 && page < 605) { //this is why $inputPage is not bound directly, need a bit of control
		inputPage.set(page)
	}

	let page
</script>


<!-- To prevent button after max page -->
{#if $inputPage < 603}
  <button on:click={increment}>Next page</button>
{:else}
  <button disabled>Next page</button>
{/if}

<input type="number" name="pageNumberInput" bind:value={page}
	id="pageNumberInput" max="604" min="1" title="Directly go to page…">

<!-- To prevent button before min page -->
{#if $inputPage > 2}
  <button on:click={decrement}>Previous page</button>
{:else}
  <button disabled>Previous page</button>
{/if}