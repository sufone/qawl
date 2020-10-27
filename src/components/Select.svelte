<script>
	import surahs from '../surahs.js'
	import {pageLeft} from '../stores/page.js'
	import checkPage from '../checkPage.js';

	let selected
	let selectedSurah
	$: { // only sets
		console.log(selected)
		for (let i = surahs.length - 1; i >= 0; i--) {
			if (selected < surahs[i]['pageGreen']) {
				console.log(surahs[i-1]['name'])
				selectedSurah = surahs[i-1]['pageGreen']
			}
		}
		pageLeft.set(checkPage(selectedSurah))

	}

	</script>

<form id="selectForm" >
	<select id="surahSelect" bind:value={$pageLeft} >
		{#each surahs as surah}
			<option value={surah.pageGreen}>
				{surah.name}
			</option>
		{/each}
	</select>
</form>