<script>
    import {pageLeft} from '../stores/page.js'

    
</script>

<div>
    <span>Current page: <input bind:value="{$pageLeft}"> </span>

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