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

Zoom: {$zoomStore}

<input id="slider" type=range bind:value={zoomVal} min=40 max=100>


<button>Zoom in</button>