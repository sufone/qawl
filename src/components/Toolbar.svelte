<script>
	import Mousetrap from 'mousetrap';
	import Settings20 from 'carbon-icons-svelte/lib/Settings20';
	import Pin20 from 'carbon-icons-svelte/lib/Pin20';
	import PinFilled20 from 'carbon-icons-svelte/lib/PinFilled20';
	import { pinToolbar } from '../stores/settings.js';
	import ToolButton from './ToolButton.svelte';
	import SurahDropdown from './SurahDropdown.svelte';
	import PageChange from './PageChange.svelte';
	import NumberSlider from './NumberSlider.svelte';
	import Hyperlink from './Hyperlink.svelte';
	import Zoom from './Zoom.svelte';
	import Fullscreen from './Fullscreen.svelte';

	function onInactive(ms, cb) {
		var wait = setTimeout(cb, ms);
		document.onmousemove =
			document.mousedown =
			document.mouseup =
			document.onkeydown =
			document.onkeyup =
			document.focus =
			document.ontouchstart =
			document.onclick =
			document.onkeypress =
				function () {
					clearTimeout(wait);
					isHidden = false;
					wait = setTimeout(cb, ms);
				};
	}

	onInactive(3000, function () {
		console.log(readyToShow);
		if (readyToShow) {
			return;
		} else if (!neverHide) {
			isHidden = true;
		}
	});

	let readyToShow; //so if mouse is resting on footer, it'll keep showing
	let isHidden = false;
	let neverHide = $pinToolbar;

	function togglePin() {
		neverHide = !neverHide;
		pinToolbar.set(neverHide);
	}

	Mousetrap.bind(',', () => {
		document.getElementById('settings-anchor').click();
	});
	Mousetrap.bind('enter', () => {
		document.getElementById('pin-toolbar').click();
	});
</script>

<div
	id="toolbar-main"
	class="acrylic"
	class:hidden={isHidden}
	on:mouseover={(_) => (readyToShow = true)}
	on:mouseout={(_) => (readyToShow = false)}
>
	<NumberSlider />

	<div id="toolbar-minor">
		<ToolButton
			id="settings-anchor"
			href="#/settings"
			title="Settings [ , ]"
		>
			<Settings20 />
		</ToolButton>
		<Fullscreen />
		<div class="spacer" />
		<Zoom />
		<PageChange />
		<SurahDropdown />
		<Hyperlink />
		<div class="spacer" />
		<ToolButton
			id="pin-toolbar"
			title="Pin toolbar [enter]"
			on:click={togglePin}
		>
			{#if neverHide}
				<PinFilled20 />
			{:else}
				<Pin20 />
			{/if}
		</ToolButton>
	</div>
</div>

<style>
	#toolbar-main {
		border-radius: 0.25rem;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
			0 6px 6px rgba(0, 0, 0, 0.23);
		display: flex;
		flex-direction: column;
		width: calc(100% - 3rem);
		margin: 0 auto 1.5rem;
		max-width: 56rem;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 1;
		padding: 0.5rem;
		transition: opacity 300ms ease;
		z-index: 2;
	}
	#toolbar-main.hidden {
		opacity: 0;
	}
	#toolbar-minor {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.spacer {
		flex-grow: 1;
	}
	.acrylic {
		backdrop-filter: blur(10px);

		/* Exclusion blend */
		background-blend-mode: exclusion;

		/* Color/tint overlay + Opacity */
		background: rgba(255, 255, 255, 0.4);

		/* Tiled noise texture */
		background-image: url(data:image/png;base64,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);
	}

	@media only screen and (max-width: 648px) {
		#toolbar-main {
			width: calc(100% - 2rem);
			margin: 0 auto 1rem;
		}
	}

	@media only screen and (max-width: 564px) {
		#toolbar-main {
			border-radius: 0;
			width: 100%;
			margin: 0 auto;
		}
	}
</style>
