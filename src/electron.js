const { app, BrowserWindow } = require('electron');
const path = require('path');
const settings = require('electron-settings');
const isDev = require('electron-is-dev');
const setupApplicationMenu = require('./menu').setupApplicationMenu;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let windowState = {};

function createMainWindow(){
	windowState = settings.get('windowState', {});

	mainWindow = new BrowserWindow({
		webPreferences: {
			nodeIntegration: false,
			preload: __dirname + '/preload.js'
		},
		title: app.name,
  		icon: __dirname + '/img/icon.png',
		titleBarStyle: 'hidden',
        width: windowState.bounds && windowState.bounds.width || 1600,
		height: windowState.bounds && windowState.bounds.height || 920,
		x: windowState.bounds && windowState.bounds.x || undefined,
		y: windowState.bounds && windowState.bounds.y || undefined,
		backgroundColor: '#FFFFFF',
		show: false
	});

	// Set the main app menú
	setupApplicationMenu(mainWindow);

	// Load
	mainWindow.loadURL(`file://${path.join(__dirname, '../public/index.html')}`);

	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
		mainWindow.focus();
	});

	// Manage window settings
	if(settings.get('isMaximized')){
		mainWindow.maximize();
	}

	['resize', 'move', 'close'].forEach((e) => {
		mainWindow.on(e, () => {
			windowState.isMaximized = mainWindow.isMaximized();

			if(!windowState.isMaximized){
				windowState.bounds = mainWindow.getBounds();
			}

			settings.set('windowState', windowState);
		});
	});

	// Development stuff
	let watcher;

    if(isDev){
		// If we are developers we might as well open the devtools by default.
		mainWindow.webContents.openDevTools();

		// Reload on change
        watcher = require('chokidar').watch(path.join(__dirname, '../public/bundle.js'), { ignoreInitial: true });
        watcher.on('change', () => {
            mainWindow.reload();
        });
	}

	// Windows events
	mainWindow.on('close', (e) => {
		if(mainWindow.isDocumentEdited()){
			var choice = require('electron').dialog.showMessageBoxSync(mainWindow, {
				type: 'question',
				buttons: ['Yes', 'No'],
				title: 'Confirm',
				message: 'Are you sure you want to quit?'
			});

			if(choice === 1) e.preventDefault();
		}
	});

	mainWindow.on('closed', () => {
        if(watcher){
            watcher.close();
		}

        mainWindow = null;
	});
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createMainWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if(mainWindow === null){
        createMainWindow();
    }
});
