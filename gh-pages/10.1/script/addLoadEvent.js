//页面加载时得到执行
function addLoadEvent(func) {
    var oldonload = window.onload
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}