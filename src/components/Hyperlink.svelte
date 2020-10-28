<script>
	import { currentSurah } from "../stores/page";

	function open() {
		window.open('https://www.quran.com/' + $currentSurah, '_blank')
	}
</script>

<button on:click={open}>Open on Quran.com</button>