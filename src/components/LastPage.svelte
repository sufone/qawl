<script>
	import {inputPage, lastInputPage} from '../stores/page.js'
	import { get } from 'svelte/store';

	$: previousCurrentPage = $inputPage

	function applyLastPage() {
		console.log(`last page store: ${$lastInputPage}; current page store: ${$inputPage} `)
		inputPage.set(get(lastInputPage))
		console.log(`last page store: ${$lastInputPage}; current page store: ${$inputPage} `)

		lastInputPage.set(previousCurrentPage)
		console.log(`last page store: ${$lastInputPage}; current page store: ${$inputPage} `)
	}
</script>

{#if $inputPage === $lastInputPage}
	<!-- //as in the page was directly entered into the bar -->
	<button disabled class="btn-disabled">Last</button>
{:else}
	<button id="last-page" title="Quick switch to previous page [ e ]" class="btn" on:click={applyLastPage}>Last</button>
{/if}

<style>

</style>