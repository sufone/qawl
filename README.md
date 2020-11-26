WIP Qawl v2

See this issue for the development plan: https://github.com/mr-islam/qawl-svelte/issues/1. **Current status**: 70% parity with previous version (missing keyboard shortcuts, dark theme, icons on hover tooltips, mostly)

Feel free to email me if you are interested in contributing right now, before the foundation is done: navedcoded@gmail.com . Sorry if things are a bit messy, but I recommend checking this repo out a few weeks later!


Old version: https://github.com/mr-islam/qawl

Sorry this readme is bad, making it public quickly in case people want to contribute early ♥

# Development
1. Make sure you have `node` properly setup with a recent version (I use 14.x).
2. Clone this repo
3. Run `yarn` to install dependencies
4. Run a local build with `electron-dev`, has hot-reload
5. Build a package with `pure-dist-[platform]` choosing the relevant platform from the scripts available in the `package.json`

(The repo uses an automatic `postinstall` script to patch the npm package `electron-update-notification` to use a promise `.then()` instead of callbacks. I haven't been able to test if I set this up correctly, but hopefully it's fine. You can check the installed package files manually, or just message me for help to ensure it's all good.)

*Many thanks to Albert Nye for his svelte electron template!*


# License

    Copyright (C) 2020 Naved Islam

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
