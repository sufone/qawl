<script>
	import { hyperlinkProvider } from "../stores/settings"
</script>

<p>Choose your online reference provider:</p>
	<h1>Settings</h1>

<select bind:value={$hyperlinkProvider}>
	<option disabled> - English - </option>
	<option value="https://quran.com/">Quran.com</option>
	<option value="http://corpus.quran.com/wordbyword.jsp?chapter=">Quran Corpus - Ayah Analysis</option>
	<option value="https://www.altafsir.com/Tafasir.asp?tMadhNo=1&tTafsirNo=86&tSoraNo=">Altafsir.org - Asbab al-Nuzul</option>
	<option disabled> - Arabic - </option>
	<option value="https://tafsir.app/">Tafsir.app</option>
	<option value="https://www.altafsir.com/Tafasir.asp?tMadhNo=1&tTafsirNo=7&tSoraNo=">Altafsir.org - Ibn Katheer</option>
</select>



<p><a href="#/">Back to Quran</a></p>