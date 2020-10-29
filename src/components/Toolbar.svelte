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

        cursor: default;
        display: flex;
        justify-content: space-around;
        width: 90%;
        margin-left: 5%;
        margin-bottom: 1.5%;
        position: fixed;
        bottom: 0;
        height: 6%;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        transition: opacity 300ms ease;

        background:rgba(0, 0, 0, 0.5);
        z-index: 2;
        backdrop-filter: blur(5px);
        padding: 5px;
        border-radius: 4px;

    }
    div#toolbar-minor {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
</style>