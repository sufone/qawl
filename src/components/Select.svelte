<script>
import surahs from '../surahs.js'
import { onMount } from 'svelte';
import {pageLeft} from '../stores/page.js'
import checkPage from '../checkPage.js';

let page = parseInt($pageLeft)

onMount(async () => { //so it's not run before elements are rendered
	var ele = document.getElementById("surahSelect");
    for (let i = 0; i < surahs.length; i++) {
		console.log(surahs[i]['pageGreen'])

        ele.innerHTML = ele.innerHTML +
            '<option value="' + surahs[i]['pageGreen'] + '">' +
            parseInt(i+1) + '. ' + surahs[i]['name'] + '</option>';
    }
});

function updatePage() {
	var selectedSurah = parseInt(document.getElementById("surahSelect").value);
	pageLeft.set(checkPage(selectedSurah));
}

</script>

<!-- <select id="surahSelect" on:change={() => {console.log(this.value)}} ></select> -->

<select id="surahSelect" on:change="{() => {updatePage()}}"></select>


<style>

</style>