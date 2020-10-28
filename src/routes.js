import { routes } from 'svelte-hash-router'

import App from './pages/Home.svelte';
import Settings from './pages/Settings.svelte'
import NotFound from './pages/NotFound.svelte';

routes.set({
	'/': App,
	'/settings': Settings,
	'*': NotFound
});

export { routes }
