import { writable, readable, derived } from 'svelte-persistent-store/dist/local';

export const inputPage =  writable("inputPage", 2);
export const lastInputPage = writable("inputPage", 2) //2 by default so it does nothing on first start
export const currentSurah = writable(1)