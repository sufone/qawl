<script>

	import { surahs } from '../surahs.svelte'
	import {inputPage, currentSurah} from '../stores/page.js'

	let selectVal

	$: if ($inputPage) { // TODO: this code should be part of the store? derived? important overall info
		console.log($inputPage)
		for (let i = surahs.length - 1; i >= 0; i--) {
			if ($inputPage < surahs[i]['pageGreen']) {
				selectVal = surahs[i-1]['pageGreen']
				currentSurah.set(i)
			}
		}
	}

</script>

<!-- svelte-ignore a11y-no-onchange -->
<select  id="surahSelect" bind:value={selectVal} on:change={() => {inputPage.set(selectVal)}} >
	{#each surahs as surah, i}
		<option value={surah.pageGreen}>
			{i+1}. {surah.name}
		</option>
	{/each}
</select>

<style>
	select {
		background-color: transparent;
		border: none;
		text-align-last:center;
		font-weight: bold;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
		font-size: 20px;
	}
	select:hover {
		background-color: rgba(0, 0, 0, 0.096);
	}
</style>