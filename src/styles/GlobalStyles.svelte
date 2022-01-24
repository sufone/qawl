<style lang="scss" global>
	html {
		box-sizing: border-box;
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

	body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Arial, sans-serif;
	}
	body,
	p {
		margin: 0;
		padding: 0;
	}

	::-webkit-scrollbar {
		width: 0.3em;
	}
	::-webkit-scrollbar:horizontal {
		height: 0.3em;
	}
	::-webkit-scrollbar-thumb {
		background-color: darkgrey;
		outline: 1px solid slategrey;
	}

	input[type='range'].slider {
		background-color: transparent;
		-webkit-appearance: none;
		outline: none;
	}
	input[type='range'].slider::-webkit-slider-runnable-track {
		background: rgba(0, 0, 0, 0.25);
		border-radius: 2px;
		width: 100%;
		height: 4px;
		cursor: pointer;
	}
	input[type='range'].slider::-webkit-slider-thumb {
		margin-top: -6.5px;
		width: 16px;
		height: 16px;
		background: rgba(255, 255, 255, 0.986);
		border: 2px solid rgb(31, 31, 31);
		border-radius: 50%;
		cursor: pointer;
		-webkit-appearance: none;
	}
	input[type='range'].slider:focus::-webkit-slider-runnable-track {
		background: rgba(0, 0, 0, 0.3);
	}
	input[type='range'].slider:focus::-webkit-slider-thumb {
		box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
	}

	@import '../../node_modules/tippy.js/dist/tippy';
	@import '../../node_modules/tippy.js/themes/light';
	@import '../../node_modules/tippy.js/animations/shift-away-subtle';
</style>
