const {ipcMain, dialog} = require('electron')

ipcMain.on('open-file-dialog', (event) => {
  dialog.showOpenDialog({
    properties: ['openFile', 'openDirectory'],
    filters: [
      { name: 'Images', extensions: ['jpg', 'png', 'gif'] }
    ]
  }, (files) => {
    if (files) {
      event.sender.send('selected-directory', files[0])
    }
  })
})

