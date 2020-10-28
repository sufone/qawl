<script>

	import surahs from '../surahs.js'
	import {inputPage} from '../stores/page.js'

	let selectVal

	$: if ($inputPage) {
		console.log($inputPage)
		for (let i = surahs.length - 1; i >= 0; i--) {
			if ($inputPage < surahs[i]['pageGreen']) {
				console.log(surahs[i-1]['name'])
				selectVal = surahs[i-1]['pageGreen']
			}
		}
	}

</script>

<form id="selectForm" >
	<select id="surahSelect" bind:value={selectVal} on:change={() => {inputPage.set(selectVal)}} >
		{#each surahs as surah}
			<option value={surah.pageGreen}>
				{surah.name}
			</option>
		{/each}
	</select>
</form>