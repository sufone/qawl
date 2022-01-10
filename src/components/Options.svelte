<script>
	import { hyperlinkProvider } from "../stores/settings";
	import Mousetrap from "mousetrap";

	const appVersion = window.remote.require("electron").app.getVersion();

	Mousetrap.bind(",", () => {
		document.getElementById("reading-anchor").click();
	});
</script>

<div id="container">
	<h1>Settings</h1>

	<p>Choose your online reference provider:</p>

	<select bind:value={$hyperlinkProvider}>
		<optgroup label="English">
			<option value="https://quran.com/">Quran.com</option>
			<option value="http://corpus.quran.com/wordbyword.jsp?chapter="
				>Quran Corpus - Ayah Analysis</option
			>
			<option
				value="https://www.altafsir.com/Tafasir.asp?tMadhNo=1&tTafsirNo=86&tSoraNo="
				>Altafsir.org - Asbab al-Nuzul</option
			>
		</optgroup>
		<optgroup label="Arabic">
			<option value="https://tafsir.app/">Tafsir.app</option>
			<option
				value="https://www.altafsir.com/Tafasir.asp?tMadhNo=1&tTafsirNo=7&tSoraNo="
				>Altafsir.org - Ibn Katheer</option
			>
		</optgroup>
	</select>

	<br /><br /><br /><br />
	<h2>Information</h2>
	<p>
		You are now running Qawl v{appVersion}. This app will automatically
		check for updates when you launch it, and notify you. Just in case, you
		can
		<a target="_blank" href="https://github.com/sufone/qawl/releases"
			>check for updates manually on the download page.</a
		>
	</p>

	<p>
		Please contact <a href="mailto:navedcoded@gmail.com"
			>navedcoded@gmail.com</a
		> for support, feedback and comments.
	</p>

	<p>
		<a target="_blank" href="https://github.com/sufone/qawl"
			>Qawl is an <em>open-source, community project</em>.</a
		>
	</p>

	<br /><br />
	<p>
		<a
			href="#/"
			id="reading-anchor"
			title="Return to the Quran reading screen [ , ]">Back to Quran</a
		>
	</p>
</div>

<style>
	#container {
		display: flex;
		flex-direction: column;
		justify-items: center;
		padding: 4rem;
		margin: 0 auto;
		max-width: 60vw;
	}
	#reading-anchor {
		color: red;
	}
</style>
