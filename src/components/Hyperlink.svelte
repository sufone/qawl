<script>
	import { currentSurah } from "../stores/page";
	import {settingsStore} from "../stores/settings"

	let suffix = "/"

	$: if ($settingsStore.hyperlinkProvider) {
		switch ($settingsStore.hyperlinkProvider) {
			case "https://www.quran.com/":
				suffix = "/";
				break
			case "https://tafsir.app/":
				suffix = "/1/";
				break
		}
	}

	function open() {
		let URL = $settingsStore.hyperlinkProvider + $currentSurah + suffix
		console.log(URL)
		window.open(URL, '_blank')
	}
</script>

<button on:click={open}>Open on Quran.com</button>