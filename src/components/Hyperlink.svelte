<script>
	import { currentSurah } from "../stores/page";
	import {settingsStore} from "../stores/settings"

	let suffix = "/"

	function open() {
		let URL = $settingsStore.hyperlinkProvider + $currentSurah + suffix
		console.log(URL)
		window.open(URL, '_blank')
	}

	$: if ($settingsStore.hyperlinkProvider) { //not pretty, but needs to be handled.
		switch ($settingsStore.hyperlinkProvider) {
			case "https://www.quran.com/":
				suffix = "/";
				break
			case "https://tafsir.app/":
				suffix = "/1/";
				break
			case "http://corpus.quran.com/wordbyword.jsp?chapter=":
				suffix = ""
				break
			case "https://www.altafsir.com/Tafasir.asp?tMadhNo=1&tTafsirNo=7&tSoraNo=":
				suffix = "&tAyahNo=1&tDisplay=yes&UserProfile=0&LanguageId=1"
				break
			case "https://www.altafsir.com/Tafasir.asp?tMadhNo=1&tTafsirNo=86&tSoraNo=":
				suffix = "&tAyahNo=1&tDisplay=yes&UserProfile=0&LanguageId=2"
				break
		}
	}
</script>

<button on:click={open}>Open This Surah Online</button>