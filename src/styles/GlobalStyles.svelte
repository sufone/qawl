<style global>
    *:focus {
        outline: none;
    }
    .btn {
        all: unset;
    }
	.btn {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
		font-size: 20px;
        padding: 0.5rem 1rem;
        background-color: rgba(0,0,0,0);
        /* background: none; */
        color: #000;
        border: 1px solid transparent;
        /* border-radius: 4px; */
        transition: all 200ms ease;
        font-weight: bold;
	}
	.btn:hover {
		background-color: rgba(0, 0, 0, 0.096);
	}


    input[type=range].slider {
  width: 100%;
  margin: 11px 0;
  background-color: transparent;
  -webkit-appearance: none;
}
input[type=range].slider:focus {
  outline: none;
}
input[type=range].slider::-webkit-slider-runnable-track {
  background: rgba(255, 255, 255, 0);
  border: 0.1px solid rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 0px;
  cursor: pointer;
}
input[type=range].slider::-webkit-slider-thumb {
  margin-top: -11.1px;
  width: 8px;
  height: 22px;
  background: rgba(0, 0, 0, 0.8);
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  -webkit-appearance: none;
}
input[type=range].slider:focus::-webkit-slider-runnable-track {
  background: #ffffff;
}
input[type=range].slider::-moz-range-track {
  background: rgba(255, 255, 255, 0);
  border: 0.1px solid rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 0px;
  cursor: pointer;
}
input[type=range].slider::-moz-range-thumb {
  width: 8px;
  height: 22px;
  background: rgba(0, 0, 0, 0.8);
  border: 0;
  border-radius: 3px;
  cursor: pointer;
}
input[type=range].slider::-ms-track {
  background: transparent;
  border-color: transparent;
  border-width: 15.1px 0;
  color: transparent;
  width: 100%;
  height: 0px;
  cursor: pointer;
}
input[type=range].slider::-ms-fill-lower {
  background: #f5f5f5;
  border: 0.1px solid rgba(0, 0, 0, 0.6);
}
input[type=range].slider::-ms-fill-upper {
  background: rgba(255, 255, 255, 0);
  border: 0.1px solid rgba(0, 0, 0, 0.6);
}
input[type=range].slider::-ms-thumb {
  width: 8px;
  height: 22px;
  background: rgba(0, 0, 0, 0.8);
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 0px;
  /*Needed to keep the Edge thumb centred*/
}
input[type=range].slider:focus::-ms-fill-lower {
  background: rgba(255, 255, 255, 0);
}
input[type=range].slider:focus::-ms-fill-upper {
  background: #ffffff;
}
/*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
how to remove the virtical space around the range input in IE*/
@supports (-ms-ime-align:auto) {
  /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
  input[type=range].slider {
    margin: 0;
    /*Edge starts the margin from the thumb, not the track as other browsers do*/
  }
}

</style>
