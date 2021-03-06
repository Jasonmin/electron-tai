// const md5 = require('md5')
const md5 = nodeRequire('md5')

// web菜单token获取
function getWebTokenWithUserName(userName) {
    var time = (new Date()).format("yyyy-MM-dd")
    let codeStr = `${userName}taiji.com${time}`
    console.log(`code:${codeStr}`)
    return (md5(codeStr)).toUpperCase()
}

function util_md5(inputStr) {
    return (md5(inputStr).toUpperCase())
}


// 日期格式化
Date.prototype.format = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}