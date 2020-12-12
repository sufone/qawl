<script>
	import {inputPage} from '../stores/page.js'
	import {onMount} from 'svelte'
	import mousetrap from 'mousetrap'

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
	let inputElem

	onMount(() => {
		inputElem = document.getElementById("pageNumberInput")

		//KEYBOARD SHORTCUTS
		mousetrap.bind(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], function() {
			inputElem.value = ''
			inputElem.focus();
		});
	})

	function checkDigits() { //So no typing beyond 3 digits
		if (inputElem.value.length == 3) {
			inputElem.blur();
		}
		if (inputElem.value > 604 || inputElem < 1) {
			inputElem.value = $inputPage
		}
	}
</script>

<div>

<!-- To prevent button after max page -->
{#if $inputPage < 603}
<button title="Next page" class="btn" on:click={increment}>←</button>
{:else}
<button title="Cannot go forward; this is the last page" class="btn-disabled" disabled>←</button>
{/if}

<input class="btn" on:keyup={checkDigits} type="number" name="pageNumberInput" bind:value={page}
id="pageNumberInput" max="604" min="1" title="Directly go to page…">

<!-- To prevent button before min page -->
{#if $inputPage > 2}
<button title="Previous page" class="btn" on:click={decrement}>→</button>
{:else}
<button title="Cannot go back; this is the first page" class="btn-disabled" disabled>→</button>
{/if}

</div>


<style>
	div {
		display: flex;
		flex-direction: row;
	}
	input {
		text-align: center;
		background-color: transparent;
		color: black;
		border: none;
		font-size: 20px;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
	}
</style>