<script>
	import { onMount } from 'svelte';
	import { routes } from './routes';
	import { Router } from 'svelte-hash-router';

	import { isLoading } from './stores/ui';

	import GlobalStyles from './styles/GlobalStyles.svelte';
	import Page from './components/Page.svelte'
import Toolbar from './components/Toolbar.svelte';

	// LOADING //////////////////////////

	isLoading.set(true);

	const win = window.remote.getCurrentWindow();
	const unsubscribe = isLoading.subscribe(value => {
		win.setDocumentEdited(value);

		if(value) console.log('is loading');
		else console.log('is NOT loading');
	});

	onMount(async () => {
		isLoading.set(false);
	});
</script>


<div class="wrapper">

	<Page />
	<Toolbar />

	<Router/>
</div>


<style>
	.wrapper{
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		overflow: hidden;
	}
</style>
