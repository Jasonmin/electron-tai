const {BrowserWindow} = require('electron').remote
const path = require('path')

const newWindowBtn = document.getElementById('new-window')

newWindowBtn.addEventListener('click', (event) => {
  console.log('llllllll')
  // const modalPath = path.join('file://', __dirname, '../assets/modules/contact/modal.html')
  const modalPath = path.join('file://', __dirname, '../assets/modules/contact/memberDetail.html')
  let win = new BrowserWindow({ width: 600, height: 600 })

  win.on('close', () => { win = null })
  win.loadURL(modalPath)
  win.show()
})
