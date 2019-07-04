const {ipcRenderer} = require('electron')

var loginStatus = checkLoginStatus()
if (!loginStatus) {
    document.getElementById(`login-modal`).classList.add('is-shown')
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
