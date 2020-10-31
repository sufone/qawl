<script>
	import {inputPage} from '../stores/page.js'
	import { FluentRevealEffect } from "fluent-reveal-effect"
	import {onMount} from 'svelte'


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

	onMount(() => {
		FluentRevealEffect.applyEffect(".effect-group-container", {
			clickEffect: false,
			lightColor: "rgba(255,255,255,0.6)",
			gradientSize: 80,
			isContainer: true,
			children: {
				borderSelector: ".btn-border",
				elementSelector: ".btn",
				lightColor: "rgba(255,255,255,0.3)",
				gradientSize: 150
			}
		})
	})
</script>

<div class="effect-group-container">
	<div class="btn-border">
		<!-- To prevent button after max page -->
		{#if $inputPage < 603}
		<button class="btn" on:click={increment}>←</button>
		{:else}
		<button class="btn" disabled>←</button>
		{/if}
	</div>

	<div class="btn-border">
	<input class="btn" type="number" name="pageNumberInput" bind:value={page}
		id="pageNumberInput" max="604" min="1" title="Directly go to page…">
	</div>

	<div class="btn-border">
		<!-- To prevent button before min page -->
		{#if $inputPage > 2}
		<button class="btn" on:click={decrement}>→</button>
		{:else}
		<button class="btn" disabled>→</button>
		{/if}
	</div>
</div>

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

	.btn {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
	padding: 1rem 2rem;
	background-color: #333;
	color: #fff;
	border: 0;

	transition: all 200ms ease;
	}
	.btn-border {
		display: inline-block;
		margin: 5px;
	}
	.btn-border .btn {
		display: block;
		margin: 2px;
	}

</style>