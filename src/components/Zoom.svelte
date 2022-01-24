<script>
	import { onMount } from 'svelte';
	import Mousetrap from 'mousetrap';
	import ZoomIn20 from 'carbon-icons-svelte/lib/ZoomIn20';
	import ZoomOut20 from 'carbon-icons-svelte/lib/ZoomOut20';
	import { zoomStore } from '../stores/settings.js';
	import ToolButton from './ToolButton.svelte';
	import tooltip from '../tooltip';

	let zoomVal;

	$: if ($zoomStore) {
		console.log($zoomStore);
		zoomVal = $zoomStore;
	}
	$: if (zoomVal >= 40 && zoomVal <= 150) {
		zoomStore.set(zoomVal); //doing it as long as it is in accepted range
	} else if (zoomVal < 40) {
		zoomVal = 40;
	} else if (zoomVal > 150) {
		zoomVal = 150;
	}
	$: if (zoomVal > 100 && zoomVal <= 150) {
		document.body.style.width = zoomVal + '%';
	}

	$: onMount(() => {
		window.addEventListener('wheel', function (e) {
			if (e.ctrlKey == true) {
				//all corresponds to touchpad pinch in/out or ctrl+scroll
				if (e.deltaY < 0 && zoomVal < 149) {
					//offest by 1 from 150/40 so it doesn't go out of bounds
					zoomVal += 1;
				}
				if (e.deltaY > 0 && zoomVal > 41) {
					zoomVal -= 1;
				}
			}
		});
	});

	function zoomIn() {
		if (zoomVal < 150) {
			zoomVal += 5;
		}
	}
	function zoomOut() {
		if (zoomVal > 40) {
			zoomVal -= 5;
		}
	}

	Mousetrap.bind('=', () => {
		document.getElementById('zoom-in').click();
	});
	Mousetrap.bind('-', () => {
		document.getElementById('zoom-out').click();
	});
</script>

<div>
	<ToolButton id="zoom-in" title="Zoom in [ = ]" on:click={zoomIn}>
		<ZoomIn20 />
	</ToolButton>
	<input
		use:tooltip
		title="Drag to zoom"
		class="slider"
		id="slider"
		type="range"
		bind:value={zoomVal}
		min="40"
		max="150"
		step="5"
	/>
	<ToolButton id="zoom-out" title="Zoom out [ - ]" on:click={zoomOut}>
		<ZoomOut20 />
	</ToolButton>
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

	@media only screen and (max-width: 782px) {
		.slider {
			display: none;
		}
	}
</style>
