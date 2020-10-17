<script>
    import {pageLeft} from '../stores/page.js'

    
</script>

<div>
    <span>Current page: <input bind:value="{$pageLeft}"> </span>
    {#if $pageLeft < 603}
        <button on:click={pageLeft.increment}>Next page</button>
    {:else}
        <button disabled>Next page</button>
    {/if}
    <button on:click={pageLeft.decrement}>Previous page</button>
</div>