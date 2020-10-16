const isDev = require('electron-is-dev')

window.IS_DEV = isDev;
window.remote = require("electron").remote;
