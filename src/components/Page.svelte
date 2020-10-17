<script>
    import {pageLeft} from '../stores/page.js'
    
    $: pageRight = $pageLeft - 1 //subtract negative number to prevent string conversions
</script>

<div>

    <img alt="Page {$pageLeft} of the Madina mushaf" src="../public/mushaf/{$pageLeft}.svg" />
    <img alt="Page {pageRight} of the Madina mushaf" src="../public/mushaf/{pageRight}.svg" />
    
</div>

<style>
div {
    display: flex;
    flex-direction: row;
}

</style>