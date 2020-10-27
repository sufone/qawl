<script>
    import {inputPage} from '../stores/page.js'
    console.log("inputpage from page.svelte: "+$inputPage)

    let left, right
    $: { //processing so the right page gets set on the right side, pun intended
        if ($inputPage % 2 === 0) {
            left = $inputPage
            right = $inputPage - 1
        } else {
            left=  $inputPage + 1
            right = $inputPage
        }
    }

</script>

<div>

    <img alt="Page {left} of the Madina mushaf" src="../public/mushaf/{left}.png" />
    <img alt="Page {right} of the Madina mushaf" src="../public/mushaf/{right}.png" />

</div>

<style>
div {
    display: flex;
    flex-direction: row;
}
img {
    max-width: 400px;
}

</style>