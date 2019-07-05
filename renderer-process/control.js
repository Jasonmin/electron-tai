const {ipcRenderer} = require('electron')

function sendLoginChangeNotification() {
    console.log(`sendLoginSuccessNotification`)
    ipcRenderer.send('login-change-success')
}

// ========================================================================
function checkLoginStatus() {
    var data = localStorage.getItem('loginModel');
    if (data) {
        console.log(`==> login true`)
        return true
    }
    console.log(`==> login false`)
    return false
}
