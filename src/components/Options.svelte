<script>
	import { hyperlinkProvider } from "../stores/settings"

	const appVersion = window.remote.require('electron').app.getVersion()

</script>

<div id="container">
	<h1>Settings</h1>

	<p>Choose your online reference provider:</p>

	<select bind:value={$hyperlinkProvider}>
		<option disabled> - English - </option>
		<option value="https://quran.com/">Quran.com</option>
		<option value="http://corpus.quran.com/wordbyword.jsp?chapter=">Quran Corpus - Ayah Analysis</option>
		<option value="https://www.altafsir.com/Tafasir.asp?tMadhNo=1&tTafsirNo=86&tSoraNo=">Altafsir.org - Asbab al-Nuzul</option>
		<option disabled> - Arabic - </option>
		<option value="https://tafsir.app/">Tafsir.app</option>
		<option value="https://www.altafsir.com/Tafasir.asp?tMadhNo=1&tTafsirNo=7&tSoraNo=">Altafsir.org - Ibn Katheer</option>
	</select>

	<br><br><br><br>
	<p ><a href="#/" id="backLink">Back to Quran</a></p>

</div>


