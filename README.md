My starter to built Electron apps with Svelte.

* Electron  
* Svelte  
* Rollup.js  
* Preprocess (svelte-preprocess) for SCSS in components and globally  
* Live reload  
* Router (with hash routing)  
* Some Electron optimizations (Icons, platform install options, Remember window size and position, Confirm before quit if `DocumentEdited`, Save app settings, [InterUI](https://rsms.me/inter/) font, ...)  


## Get started

Install the dependencies...

```bash
cd svelte-electron-starter
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


... open with electron:

```bash
npm run electron-dev
```

See `packacge.json` scripts for other build options
