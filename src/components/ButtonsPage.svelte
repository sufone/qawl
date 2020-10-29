<script>
	import {inputPage} from '../stores/page.js'

	function increment(){
		inputPage.update(p => p += 2)
	}
	function decrement() {
		inputPage.update(p => p -= 2)
	}
</script>


<!-- To prevent button after max page -->
{#if $inputPage < 603}
  <button on:click={increment}>Next page</button>
{:else}
  <button disabled>Next page</button>
{/if}

<!-- To prevent button before min page -->
{#if $inputPage > 2}
  <button on:click={decrement}>Previous page</button>
{:else}
  <button disabled>Previous page</button>
{/if}