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

//目的是为了插进节点中，不只是最后
/*
    Args:
        targetElement:目标元素
        newElement:待插入元素
 */
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}


function addClass(element, value) {
    if (!element.className) {
        element.className = value;

    } else {
        newClassName = element.className;
        newClassName+= " "
        newClassName+= value;
        element.className = newClassName;
    }
}


function highlightPage() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName("nav")) return false;
    var nav = document.getElementsByTagName("nav");
    var links = nav[0].getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {//遍历每一个链接

        //所有链接
        var linkurl = links[i].getAttribute("href")

        //当前链接
        var currenturl = window.location.href;

        //indexOf查看是否存在参数字符串
        if (currenturl.indexOf(linkurl) != -1) {
            links[i].className = "here"

            //用id标记当前页面,lastChild就是文本节点
            var linktext = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id", linktext)//body id=home
        }
    }
}



addLoadEvent(highlightPage)
