<script>
    import {pageRight} from '../stores/page.js'
    
    $: pageLeft = $pageRight + 1
</script>

<div>

    <img alt="Page {pageLeft} of the Madina mushaf" src="../public/mushaf/{pageLeft}.svg" />
    <img alt="Page {$pageRight} of the Madina mushaf" src="../public/mushaf/{$pageRight}.svg" />
    
</div>

<style>
div {
    display: flex;
    flex-direction: row;
}

</style>