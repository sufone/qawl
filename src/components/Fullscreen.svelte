<script>
    import Mousetrap from 'mousetrap'
    import FitToScreen24 from 'carbon-icons-svelte/lib/FitToScreen24'

    function toggleFullscreen() {
        let currentWindow = window.remote.getCurrentWindow()
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

<button class="btn" title="Fullscreen [f11]" on:click={toggleFullscreen}>
    <FitToScreen24  />
</button>
