<script>
	import {inputPage} from '../stores/page.js'
	import {onMount} from 'svelte'
	import Mousetrap from 'mousetrap'
	import CaretRight24 from 'carbon-icons-svelte/lib/CaretRight24'
	import CaretLeft24 from 'carbon-icons-svelte/lib/CaretLeft24'
	import ArrowLeft24 from 'carbon-icons-svelte/lib/ArrowLeft24'
	import ArrowRight24 from 'carbon-icons-svelte/lib/ArrowRight24'


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

	function checkDigits() { //So no typing beyond 3 digits
		if (inputElem.value.length == 3) {
			inputElem.blur();
		}
		if (inputElem.value > 604 || inputElem < 1) {
			inputElem.value = $inputPage
		}
	}

	onMount(() => {
		inputElem = document.getElementById("pageNumberInput")

		//KEYBOARD SHORTCUTS
		Mousetrap.bind(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], function() {
			inputElem.value = ''
			inputElem.focus();
		});
	})

	Mousetrap.bind("a", () => {
		document.getElementById("next-page").click()
	})
	Mousetrap.bind("d", () => {
		document.getElementById("previous-page").click()
	})
</script>

<div>

<!-- To prevent button after max page -->
{#if $inputPage < 603}
<button  id="next-page" title="Next page [ a ]" class="btn" on:click={increment} >
	<ArrowLeft24 />
</button>
{:else}
<button title="Cannot go forward; this is the last page" class="btn-disabled" >
	<CaretLeft24 style="fill: gray"  />
</button>
{/if}

<input class="btn" on:keyup={checkDigits} type="number" name="pageNumberInput" bind:value={page}
id="pageNumberInput" max="604" min="1" title="Directly go to page…">

<!-- To prevent button before min page -->
{#if $inputPage > 2}
<button  id="previous-page" title="Previous page [ d ]" class="btn" on:click={decrement} >
	<ArrowRight24 />
</button>
{:else}
<button title="Cannot go back; this is the last page" class="btn-disabled"  >
	<CaretRight24 style="fill: gray"  />
</button>
{/if}

</div>


<style>
	#pageNumberInput {
		padding: 0.5rem 0.5rem;
	}
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