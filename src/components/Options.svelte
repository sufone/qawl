<script>
	import { settingsStore } from "../stores/settings"
</script>

<a href="#/">Back to Quran</a>

<select bind:value={$settingsStore.hyperlinkProvider}>
	<option disabled> - English - </option>
	<option value="https://quran.com/">Quran.com</option>
	<option disabled> - Arabic - </option>
	<option value="https://tafsir.app/">Tafsir.app</option>
</select>