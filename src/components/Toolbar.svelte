<script>
    import {inputPage} from '../stores/page.js'
    import Select from './Select.svelte'
    import Buttons from './Buttons.svelte'

    function blankField() {
        document.getElementById("pageNumberInput").value = ''
    }

</script>

<div>
    <form id="pageForm" on:submit|preventDefault={() => {inputPage.set(document.getElementById("pageNumberInput")); blankField();}}>
        Current page: <input type="number" name="pageNumberInput"
            id="pageNumberInput" placeholder="{$inputPage}" max="604" min="1" title="Directly go to page…">
    </form>


    <Buttons/>

    <Select/>
</div>