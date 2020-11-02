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
<button class="btn" on:click={increment}>←</button>
{:else}
<button class="btn" disabled>←</button>
{/if}

<input class="btn" type="number" name="pageNumberInput" bind:value={page}
id="pageNumberInput" max="604" min="1" title="Directly go to page…">

<!-- To prevent button before min page -->
{#if $inputPage > 2}
<button class="btn" on:click={decrement}>→</button>
{:else}
<button class="btn" disabled>→</button>
{/if}

<style>
	div {
		display: flex;
		flex-direction: row;
	}
	input {
		text-align: center;
		background-color: transparent;
		color: white;
		border: none;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
	}
</style>