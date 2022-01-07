<style global>
	html {
		box-sizing: border-box;
	}

	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	body {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			Arial, sans-serif;
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

	.btn,
	.btn-disabled {
		all: unset;
	}
	.btn {
		cursor: pointer;
	}
	.btn,
	.btn-disabled {
		font-size: 1.125rem;
		padding: 0.5rem;
		background-color: rgba(0, 0, 0, 0);
		/* background: none; */
		color: #000;
		border: none;
		border-radius: .25rem;
		min-width: 2rem;
		min-height: 2rem;
		text-align: center;
		transition: all 200ms ease;
	}
	.btn:hover {
		background-color: rgba(0, 0, 0, 0.096);
	}
	.btn-disabled {
		color: rgb(143, 143, 143);
		cursor: default;
	}

	input[type="range"].slider {
		background-color: transparent;
		-webkit-appearance: none;
	}
	input[type="range"].slider:focus {
		outline: none;
	}
	input[type="range"].slider::-webkit-slider-runnable-track {
		background: rgba(255, 255, 255, 0);
		border: 0.1px solid rgba(0, 0, 0, 0.6);
		width: 100%;
		height: 0px;
		cursor: pointer;
	}
	input[type="range"].slider::-webkit-slider-thumb {
		margin-top: -8.5px;
		width: 16px;
		height: 16px;
		background: rgba(255, 255, 255, 0.986);
		border: 2px solid rgb(31, 31, 31);
		border-radius: 100px;
		cursor: pointer;
		-webkit-appearance: none;
	}
	input[type="range"].slider:focus::-webkit-slider-runnable-track {
		background: #ffffff;
	}
</style>
