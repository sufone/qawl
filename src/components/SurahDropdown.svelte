<script>

	import { surahs } from '../surahs.svelte'
	import {inputPage, currentSurah} from '../stores/page.js'
	import Mousetrap from 'mousetrap'

	let selectVal

	let current

	$: if ($inputPage) { // TODO: this code should be part of the store? derived? important overall info
		console.log($inputPage)
		for (let i = surahs.length - 1; i >= 0; i--) {
			if ($inputPage < surahs[i]['pageGreen']) {
				selectVal = surahs[i-1]['pageGreen']
				currentSurah.set(i)
			}
		}
	}

	Mousetrap.bind("w", () => {
		if ($currentSurah < 114) {
			currentSurah.update(n => n)
			console.log($currentSurah)
			selectVal = surahs[$currentSurah].pageGreen
			inputPage.set(selectVal)
		}
	})
	Mousetrap.bind("s", () => {
		if ($currentSurah > 1) {
			currentSurah.update(n => n-2)
			console.log($currentSurah)
			selectVal = surahs[$currentSurah].pageGreen
			inputPage.set(selectVal)
		}
	})
</script>

<!-- svelte-ignore a11y-no-onchange -->
<select title="Choose a surah to read [w/d]" id="surahSelect" bind:value={selectVal} on:change={() => {inputPage.set(selectVal)}} >
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