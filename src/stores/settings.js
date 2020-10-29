import { writable, readable, derived } from 'svelte-persistent-store/dist/local';


export const hyperlinkProvider = writable("hyperlinkProvider", "https://quran.com/");

export const zoomStore = writable("zoomStore", 100)