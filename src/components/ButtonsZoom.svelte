<script>
	import {zoomStore} from '../stores/settings.js'
	import { FluentRevealEffect } from "fluent-reveal-effect"
	import {onMount} from 'svelte'

	let zoomVal

	$: if ($zoomStore) {
		console.log($zoomStore)
		zoomVal = $zoomStore
	}
	$: if (zoomVal > 39 && zoomVal < 101) {
		zoomStore.set(zoomVal)
	}
</script>

<div class="effect-group-container">
	<div class="btn-border">
		<button class="btn" on:click={() => {zoomVal += 10}}>+</button>
	</div>
	<div class="btn-border">
		<input class="btn" id="slider" type=range bind:value={zoomVal} min=40 max=100>
	</div>
	<div class="btn-border">
		<button class="btn" on:click={() => {zoomVal -= 10}}>-</button>
	</div>
</div>


<style>
	input {
		direction: rtl;
	}
	div {
		display: flex;
		flex-direction: row;
		justify-content: center;
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