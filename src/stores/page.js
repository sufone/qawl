import { writable, readable, derived } from 'svelte-persistent-store/dist/local';

export const inputPage =  writable("inputPage", 2);
export const currentSurah = writable(1)