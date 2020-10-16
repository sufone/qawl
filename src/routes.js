import { routes } from 'svelte-hash-router'

import Home from './pages/Home.svelte';
import NotFound from './pages/NotFound.svelte';

routes.set({
	'/': Home,
	'*': NotFound
});

export { routes }
