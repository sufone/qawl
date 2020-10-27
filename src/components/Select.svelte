<script>
	//TODO: Next steps to fix this
	//instead of directly binding the select to the store, instead have an intermediary var
	//select on:blur can set inputPage directly
	//and a $: reactive script can check $inputPage against surahs.js, and set intermediatery var to be like that (so the select also changes with it)

	import surahs from '../surahs.js'
	import {inputPage} from '../stores/page.js'

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
		inputPage.set((selectedSurah))

	}

	</script>

<form id="selectForm" >
	<select id="surahSelect" bind:value={$inputPage} >
		{#each surahs as surah}
			<option value={surah.pageGreen}>
				{surah.name}
			</option>
		{/each}
	</select>
</form>