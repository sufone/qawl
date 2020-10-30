<script>
    import Select from './Select.svelte'
    import Buttons from './ButtonsPage.svelte'
    import NumberSlider from './NumberSlider.svelte'
    import Hyperlink from './Hyperlink.svelte'
    import Zoom from './ButtonsZoom.svelte'
    import {onMount} from 'svelte'

    function onInactive(ms, cb) {
        var wait = setTimeout(cb, ms);
        document.onmousemove = document.mousedown = document.mouseup = document.onkeydown =
        document.onkeyup = document.focus = document.ontouchstart = document.onclick =
        document.onkeypress = function () {
            clearTimeout(wait);
            document.getElementById("toolbar-main").style.opacity = 1;
            document.body.style.cursor = "pointer";
            wait = setTimeout(cb, ms);
        };
    }

    onInactive(1000, function () {
        console.log(readyToShow)
        if (readyToShow === true) {
            return;
        } else if (neverHide === false) {
            document.getElementById("toolbar-main").style.opacity = 0;
            document.body.style.cursor = "none";
        }
    });

    let readyToShow; //so if mouse is resting on footer, it'll keep showing

    onMount(async () => {
        document.getElementById("toolbar-main").addEventListener("mouseover", function() {readyToShow=true;});
        document.getElementById("toolbar-main").addEventListener("mouseout", function() {readyToShow=false;});
    });

    let neverHide = false //maybe this should be a setting to set permanently?

    function toggleHide() {
        neverHide = !neverHide
        console.log(neverHide)
    }

</script>

<div id="toolbar-main">

    <NumberSlider/>

    <div id="toolbar-minor">

        <a href="#/settings">Settings</a>
        <Zoom />
        <Buttons/>
        <Select/>
        <Hyperlink/>
        <button on:click={toggleHide}>Pin Toolbar</button>

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
        padding: 10px;
        border-radius: 4px;

    }
    div#toolbar-minor {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
</style>