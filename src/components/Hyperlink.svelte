<script>
	import Mousetrap from 'mousetrap';
	import Launch20 from 'carbon-icons-svelte/lib/Launch20';
	import { currentSurah } from '../stores/page';
	import { hyperlinkProvider } from '../stores/settings';
	import ToolButton from './ToolButton.svelte';

	let suffix = '/';

	function open() {
		let URL = $hyperlinkProvider + $currentSurah + suffix;
		console.log(URL);
		window.remote.require('electron').shell.openExternal(URL);
	}

	$: if ($hyperlinkProvider) {
		//not pretty, but needs to be handled. maybe move to a derived store?
		switch ($hyperlinkProvider) {
			case 'https://www.quran.com/':
				suffix = '/';
				break;
			case 'https://tafsir.app/':
				suffix = '/1/';
				break;
			case 'http://corpus.quran.com/wordbyword.jsp?chapter=':
				suffix = '';
				break;
			case 'https://www.altafsir.com/Tafasir.asp?tMadhNo=1&tTafsirNo=7&tSoraNo=':
				suffix = '&tAyahNo=1&tDisplay=yes&UserProfile=0&LanguageId=1';
				break;
			case 'https://www.altafsir.com/Tafasir.asp?tMadhNo=1&tTafsirNo=86&tSoraNo=':
				suffix = '&tAyahNo=1&tDisplay=yes&UserProfile=0&LanguageId=2';
				break;
		}
	}

	Mousetrap.bind('q', () => {
		document.getElementById('online-hyperlink').click();
	});
</script>

<ToolButton
	on:click={open}
	id="online-hyperlink"
	title="Open online translation, recitation & tafsir [ q ]"
>
	<Launch20 />
</ToolButton>
