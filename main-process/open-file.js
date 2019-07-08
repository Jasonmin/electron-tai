const { ipcMain, dialog } = require('electron')

ipcMain.on('open-file-dialog', (event) => {
    console.log('open-file-dialog main')
    dialog.showOpenDialog({
        properties: ['openFile', 'openDirectory'],
        filters: [
            { name: 'Images', extensions: ['jpg', 'png', 'gif'] }
        ]
    }, (files) => {
        if (files) {
            event.sender.send('selected-directory', files)
        }
    })
})