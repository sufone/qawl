<script>
    import {pageLeft} from '../stores/page.js'
    import surahs from '../surahs.js'
    console.log(surahs)

    function checkPage() {
    let input = document.getElementById("pageNumberInput").value
    blankField()
    if (input < 605 && input > 0) { // ensures possible page
        if (input % 2 === 0) { // even page can be set directly
			return input
		} else { // odd page processed to facing even page
			return input - -1
		}
	} else {
        //prompt user that page is outside the Quran
    }

    function blankField() {
        document.getElementById("pageNumberInput").value = ''
    }
}
</script>

<div>
    <form id="pageForm" on:submit|preventDefault={() => {console.log('submit'); pageLeft.set(checkPage());}}>
        Current page: <input type="number" name="pageNumberInput"
            id="pageNumberInput" placeholder="{$pageLeft}" max="604" min="1" title="Directly go to page…">
    </form>


    <!-- To prevent button after max page -->
    {#if $pageLeft < 603}
        <button on:click={pageLeft.increment}>Next page</button>
    {:else}
        <button disabled>Next page</button>
    {/if}

    <!-- To prevent button before min page -->
    {#if $pageLeft > 2}
        <button on:click={pageLeft.decrement}>Previous page</button>
    {:else}
        <button disabled>Previous page</button>
    {/if}
</div>