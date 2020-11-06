<script>
	import {zoomStore} from '../stores/settings.js'
	import {onMount} from 'svelte'

	let zoomVal

	$: if ($zoomStore) {
		console.log($zoomStore)
		zoomVal = $zoomStore
	}
	$: if (zoomVal > 39 && zoomVal < 101) {
		zoomStore.set(zoomVal)
	}

	onMount(() => {
		window.addEventListener('wheel', function(e) {
			if (e.ctrlKey == true) { //all corresponds to touchpad pinch in/out
				if (e.deltaY < 0) {
					zoomVal += 5
				}
				if (e.deltaY > 0) {
					zoomVal -= 5
				}
			}
		});
	})
</script>

<div>
	<button class="btn" on:click={() => {zoomVal += 10}}>+</button>
	<input class="slider" id="slider" type=range bind:value={zoomVal} min=40 max=100>
	<button class="btn" on:click={() => {zoomVal -= 10}}>-</button>
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
</style>