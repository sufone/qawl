<style global>
  body::-webkit-scrollbar {
    width: 0.3em;
}
    *:focus {
::-webkit-scrollbar:horizontal {
  height: 0.3em;
}
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
        outline: none;
    }
    .btn, .btn-disabled {
        all: unset;
    }
	.btn, .btn-disabled {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
		font-size: 20px;
        padding: 0.5rem 1rem;
        background-color: rgba(0,0,0,0);
        /* background: none; */
        color: #000;
        border: 1px solid transparent;
        border-radius: 2px;
        transition: all 200ms ease;
        font-weight: bold;
	}
	.btn:hover {
		background-color: rgba(0, 0, 0, 0.096);
	}
  .btn-disabled {
    color: rgb(143, 143, 143)
  }

    input[type=range].slider {
      
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
  margin-top: -8.5px;
  width: 16px;
  height: 16px;
  background: rgba(255, 255, 255, 0.986);
  border: 2px solid rgb(31, 31, 31);
  border-radius: 100px;
  cursor: pointer;
  -webkit-appearance: none;
}
input[type=range].slider:focus::-webkit-slider-runnable-track {
  background: #ffffff;
}
</style>
