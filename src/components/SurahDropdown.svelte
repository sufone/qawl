<script>
	import Mousetrap from 'mousetrap';
	import { surahs } from '../surahs.svelte';
	import { inputPage, currentSurah } from '../stores/page.js';
	import tooltip from '../tooltip';

	let selectVal;

	let current;

	$: if ($inputPage) {
		// TODO: this code should be part of the store? derived? important overall info
		console.log($inputPage);
		for (let i = surahs.length - 1; i >= 0; i--) {
			if ($inputPage < surahs[i]['pageGreen']) {
				selectVal = surahs[i - 1]['pageGreen'];
				currentSurah.set(i);
			}
		}
	}

	Mousetrap.bind('w', () => {
		if ($currentSurah < 114) {
			currentSurah.update((n) => n);
			console.log($currentSurah);
			selectVal = surahs[$currentSurah].pageGreen;
			inputPage.set(selectVal);
		}
	});
	Mousetrap.bind('s', () => {
		if ($currentSurah > 1) {
			currentSurah.update((n) => n - 2);
			console.log($currentSurah);
			selectVal = surahs[$currentSurah].pageGreen;
			inputPage.set(selectVal);
		}
	});
</script>

<!-- svelte-ignore a11y-no-onchange -->
<select
	use:tooltip
	title="Choose a surah [w/d]"
	id="surahSelect"
	bind:value={selectVal}
	on:change={() => {
		inputPage.set(selectVal);
	}}
>
	{#each surahs as surah, i}
		<option value={surah.pageGreen}>
			{i + 1}. {surah.name}
		</option>
	{/each}
</select>

<style>
	select {
		background-color: transparent;
		border: none;
		border-radius: 0.25rem;
		font-size: 1rem;
		height: 2.5rem;
		outline: none;
		padding: 0 0.5rem;
		transition: all 200ms ease;
		width: 10rem;
	}
	select:focus {
		background-color: rgba(0, 0, 0, 0.05);
	}
	select:hover {
		background-color: rgba(0, 0, 0, 0.096);
	}

	@media only screen and (max-width: 500px) {
		select {
			display: none;
		}
	}
</style>
