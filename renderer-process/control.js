const {ipcRenderer} = require('electron')

function sendLoginSuccessNotification() {
    console.log(`sendLoginSuccessNotification`)
    ipcRenderer.send('login-success')
}

// ========================================================================
function checkLoginStatus() {
    var data = localStorage.getItem('loginModel3');
    if (data) {
        console.log(`==> login true`)
        return true
    }
    console.log(`==> login false`)
    return false
}
