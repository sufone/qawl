<script>
	import Mousetrap from 'mousetrap';
	import FitToScreen20 from 'carbon-icons-svelte/lib/FitToScreen20';
	import ToolButton from './ToolButton.svelte';

	function toggleFullscreen() {
		let currentWindow = window.remote.getCurrentWindow();
		if (currentWindow.isFullScreen()) {
			currentWindow.setFullScreen(false);
		} else {
			currentWindow.setFullScreen(true);
		}
	}

	// TODO: Check if auto electron f11 bind works in production
	// Mousetrap.bind("f11", () => {
	// 	toggleFullscreen()
	// })
</script>

<ToolButton title="Fullscreen [ F11 ]" on:click={toggleFullscreen}>
	<FitToScreen20 />
</ToolButton>
