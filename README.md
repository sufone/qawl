WIP Qawl v2

See this issue for the development plan: https://github.com/mr-islam/qawl-svelte/issues/1. **Current status**: 70% parity with previous version (missing keyboard shortcuts, dark theme, icons on hover tooltips, mostly)

Feel free to email me if you are interested in contributing right now, before the foundation is done: navedcoded@gmail.com . Sorry if things are a bit messy, but I recommend checking this repo out a few weeks later!


Old version: https://github.com/mr-islam/qawl

Sorry this readme is bad, making it public quickly in case people want to contribute early ♥

# Development
Use the node scripts `electron-dev` and `pure-dist`, others are there from a template still (to be removed later). I prefer yarn to use yarn so that's the lockfile here.

Please adjust the `index.js` file for the npm package `electron-update-notification` to use a promise `.then()` instead of callbacks. [See my fork](https://github.com/mr-islam/electron-update-notification) for an example. (I should submit a PR, publish on npm, or at least make an npm `patch-package`… but that's for later when development is done. Contributions in this area would be amazing!~)

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
