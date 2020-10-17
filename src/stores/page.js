
import { writable } from 'svelte/store';

function createPage() {
	const { subscribe, set, update } = writable(1);

	return {
		subscribe,
		increment: () => update(n => n + 2),
		decrement: () => update(n => n - 2),
		reset: () => set(0)
	};
}

export const pageRight = createPage();

// import { writable } from 'svelte/store';

// export const pageRight = writable(1)