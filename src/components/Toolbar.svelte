<script>
    import Select from './Select.svelte'
    import Buttons from './ButtonsPage.svelte'
    import NumberSlider from './NumberSlider.svelte'
    import Hyperlink from './Hyperlink.svelte'
    import Zoom from './ButtonsZoom.svelte'
</script>

<div id="toolbar-main">

    <NumberSlider/>

    <div id="toolbar-minor">

        <a href="#/settings">Settings</a>
        <Zoom />
        <Buttons/>
        <Select/>
        <Hyperlink/>
    </div>


</div>

<style>
    div#toolbar-main {
        display: flex;
        flex-direction: column;
    }
    div#toolbar-minor {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
</style>