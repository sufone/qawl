<script>
	import { onMount } from 'svelte';
	import Mousetrap from 'mousetrap';
	import ArrowLeft20 from 'carbon-icons-svelte/lib/ArrowLeft20';
	import ArrowRight20 from 'carbon-icons-svelte/lib/ArrowRight20';
	import { inputPage } from '../stores/page.js';
	import tooltip from '../tooltip';
	import ToolButton from './ToolButton.svelte';

	function increment() {
		inputPage.update((p) => (p += 2));
	}
	function decrement() {
		inputPage.update((p) => (p -= 2));
	}

	$: if ($inputPage) {
		// this duplicate ./NumberSlider, to optimize in the future
		page = $inputPage;
	}
	$: if (page > 0 && page < 605) {
		//this is why $inputPage is not bound directly, need a bit of control
		inputPage.set(page);
	}

	let page;
	let inputElem;

	function checkDigits() {
		//So no typing beyond 3 digits
		if (inputElem.value.length == 3) {
			inputElem.blur();
		}
		if (inputElem.value > 604 || inputElem < 1) {
			inputElem.value = $inputPage;
		}
	}

	onMount(() => {
		inputElem = document.getElementById('pageNumberInput');

		//KEYBOARD SHORTCUTS
		Mousetrap.bind(
			['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
			function () {
				inputElem.value = '';
				inputElem.focus();
			}
		);
	});

	Mousetrap.bind('a', () => {
		document.getElementById('next-page').click();
	});
	Mousetrap.bind('d', () => {
		document.getElementById('previous-page').click();
	});
</script>

<div>
	<ToolButton
		id="next-page"
		title="Next page [ a ]"
		on:click={increment}
		disabled={$inputPage >= 604}
	>
		<ArrowLeft20 />
	</ToolButton>

	<input
		use:tooltip
		on:keyup={checkDigits}
		type="number"
		name="pageNumberInput"
		bind:value={page}
		id="pageNumberInput"
		max="604"
		min="1"
		title="Jump to page"
	/>

	<ToolButton
		id="previous-page"
		title="Previous page [ d ]"
		on:click={decrement}
		disabled={$inputPage <= 1}
	>
		<ArrowRight20 />
	</ToolButton>
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
	}
	input {
		background-color: transparent;
		border: none;
		border-radius: 0.25rem;
		color: black;
		font-size: 1rem;
		outline: none;
		text-align: center;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	input:focus {
		background-color: rgba(0, 0, 0, 0.05);
	}
	input:hover {
		background-color: rgba(0, 0, 0, 0.096);
	}

	@media only screen and (max-width: 648px) {
		input {
			display: none;
		}
	}
</style>
