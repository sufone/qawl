import { writable } from 'svelte/store';


const settings = {
	hyperlinkProvider: "https://tafsir.app/",
}

export const settingsStore = writable(settings);
