<script>
    import {pageRight} from '../stores/page.js'
</script>

<div>
    <p>Current page: {$pageRight}</p>
    <button on:click={pageRight.increment}>Next page</button>
    <button on:click={pageRight.decrement}>Previous page</button>
</div>