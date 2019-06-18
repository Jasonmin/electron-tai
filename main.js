// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')

const glob = require('glob')
const path = require('path')
const Store = require('./utils/stores/store')
const {localStorage} = require('electron-browser-storage');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// initialize the store
const store = new Store({
    configName: 'user-preferences',
    defaults: {
        windowBounds: {
            width: 800,
            height: 600,
            x: 0,
            y: 0
        }
    }
});

function initialize() {

    loadDemos()

    global.value = "啦啦啦啦"
    
}

function createWindow() {
    // Create the browser window.
    // mainWindow = new BrowserWindow({
    //     width: 1600,
    //     height: 800,
    //     webPreferences: {
    //         nodeIntegration: true
    //     }
    // })

    var config = store.get('windowBounds')
    config.webPreferences = {
        nodeIntegration: true
    }

    mainWindow = new BrowserWindow(config);

    function saveWindowsBounds() {
        // store.get('windowBounds',mainWindow.get
        store.set('windowBounds', mainWindow.getBounds());
    }

    mainWindow.on('resize', saveWindowsBounds);
    mainWindow.on('move', saveWindowsBounds);

    // and load the index.html of the app.
    mainWindow.loadFile('./index.html')
    // mainWindow.loadFile('./assets/login.html')

    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })

    async function getLoginModel(){
        return localStorage.getItem('loginModel');
    }
    getLoginModel().then((obj)=> {
        global.loginModel = obj
    })

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

app.setName("南昌全媒体大脑")

// 忽略https证书错误
app.commandLine.appendSwitch('ignore-certificate-errors')

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// Require each JS file in the main-process dir
function loadDemos() {
    const files = glob.sync(path.join(__dirname, 'main-process/*.js'))
    files.forEach((file) => { require(file) })
}

initialize()