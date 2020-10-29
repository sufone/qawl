import { writable } from 'svelte/store';


const settings = {
	hyperlinkProvider: "https://quran.com/",
}

export const settingsStore = writable(settings);

export const zoomStore = writable(100)