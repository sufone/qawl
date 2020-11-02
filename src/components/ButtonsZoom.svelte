<script>
	import {zoomStore} from '../stores/settings.js'

	let zoomVal

	$: if ($zoomStore) {
		console.log($zoomStore)
		zoomVal = $zoomStore
	}
	$: if (zoomVal > 39 && zoomVal < 101) {
		zoomStore.set(zoomVal)
	}
</script>

<button class="btn" on:click={() => {zoomVal += 10}}>+</button>
<input class="btn" id="slider" type=range bind:value={zoomVal} min=40 max=100>
<button class="btn" on:click={() => {zoomVal -= 10}}>-</button>

<style>
	input {
		direction: rtl;
	}
	div {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
</style>