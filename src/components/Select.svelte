<script>
import surahs from '../surahs.js'
import { onMount } from 'svelte';

onMount(async () => {
	var ele = document.getElementById("surahSelect");
    for (let i = 0; i < surahs.length; i++) {
        ele.innerHTML = ele.innerHTML +
            '<option value="' + surahs[i]['pageGreen'] + '">' +
            parseInt(i+1) + '. ' + surahs[i]['name'] + '</option>';
    }
});

function test() {

};
</script>

<select id="surahSelect" ></select>

<style>

</style>