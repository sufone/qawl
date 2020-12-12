<script>
	import {zoomStore} from '../stores/settings.js'
	import {onMount} from 'svelte'

	let zoomVal

	$: if ($zoomStore) {
		console.log($zoomStore)
		zoomVal = $zoomStore
	}
	$: if (zoomVal >= 40 && zoomVal <= 150) {
		zoomStore.set(zoomVal) //doing it as long as it is in accepted range
	} else if (zoomVal < 40) {
		zoomVal = 40
	} else if (zoomVal > 150) {
		zoomVal = 150
	}
	$: if(zoomVal > 100 && zoomVal <=150) {
		document.body.style.width = zoomVal+"%"
	}

	$: onMount(() => {
		window.addEventListener('wheel', function(e) {
			if (e.ctrlKey == true) { //all corresponds to touchpad pinch in/out
				if (e.deltaY < 0 && zoomVal < 150) {
					zoomVal += 5
				}
				if (e.deltaY > 0 && zoomVal > 40) {
					zoomVal -= 5
				}
			}
		});
	})

	function zoomIn() {
		if (zoomVal < 150) {zoomVal += 5}
	}
	function zoomOut() {
		if (zoomVal > 40) {zoomVal -= 5}
	}
</script>

<div>
	<button title="Zoom in" class="btn" on:click={zoomIn}>+</button>
	<input title="Drag to zoom" class="slider" id="slider" type=range bind:value={zoomVal} min=40 max=150>
	<button title="Zoom out" class="btn" on:click={zoomOut}>-</button>
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