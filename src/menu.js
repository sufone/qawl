const { app, Menu } = require('electron');
const isDev = require('electron-is-dev');

exports.setupApplicationMenu = (mainWindow) => {
	let menu = [{
		label: app.name,
		role: 'appMenu'
	}, {
		label: 'File',
		role: 'fileMenu'
	}, {
		label: 'Edit',
		role: 'editMenu'
	}, {
		label: 'View',
		submenu: [{
			label: 'Actual Size',
			role: 'resetZoom'
		}, {
			label: 'Zoom In',
			role: 'zoomIn'
		}, {
			label: 'Zoom Out',
			role: 'zoomOut'
		}, {
			type: 'separator'
		}, {
			label: 'Toggle Full Screen',
			role: 'togglefullscreen'
		}]
	}, {
		label: 'Window',
		role: 'windowMenu'
	}];

	if(isDev){
		menu.push({
			label: 'Development',
			submenu: [{
				label: 'Toggle Developer Tools',
				role: 'toggleDevTools'
			}, {
				label: 'Reload window',
				click: () => mainWindow.reload()
			}]
		});
	}

	if (process.platform === 'darwin') {
		Menu.setApplicationMenu(Menu.buildFromTemplate(menu));
	}
};
