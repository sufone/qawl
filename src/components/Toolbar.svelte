<script>
    import {pageLeft} from '../stores/page.js'
    import Select from './Select.svelte'
    import checkPage from '../checkPage.js'

    function blankField() {
        document.getElementById("pageNumberInput").value = ''
    }

</script>

<div>
    <form id="pageForm" on:submit|preventDefault={() => {pageLeft.set(checkPage(document.getElementById("pageNumberInput"))); blankField();}}>
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

    <Select/>
</div>