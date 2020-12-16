<script>
	import { hyperlinkProvider } from "../stores/settings"
	import Mousetrap from 'mousetrap'

	const appVersion = window.remote.require('electron').app.getVersion()

	Mousetrap.bind(",", () => {
        document.getElementById('reading-anchor').click();
    })
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
	<h2>Information</h2>
	<p>You are now running Qawl v{appVersion}. This app will automatically notify when updates are released. Just in case, you can <a href="https://github.com/sufone/qawl/releases">check for updates manually on the download page.</a></p>

	<p>Please contact <a href="mailto:navedcoded@gmail.com">navedcoded@gmail.com</a> for support, feedback and comments.</p>

	<br><br>
	<p ><a href="#/" id="reading-anchor">Back to Quran</a></p>

</div>


<style>
	* {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
	}
	#container {
		padding-left: 100px;
		padding-top: 100px;
		display: flex;
		flex-direction: column;
		justify-items: center;
		max-width: 60vw;
	}
	#reading-anchor {
		/* padding-top: 200px; */
		color: red;
	}
</style>