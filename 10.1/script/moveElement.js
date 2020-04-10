function moveElement(elementID, final_x, final_y, interval) {
    if (!document.getElementById) return false
    if (!document.getElementById(elementID)) return false
    var elem = document.getElementById(elementID)
    var xpos = parseInt(elem.style.left)
    var ypos = parseInt(elem.style.top)
    //出口
    if (xpos == final_x && ypos == final_y) {
        return true
    }

    if (xpos < final_x) {
        xpos++
    }

    if (xpos > final_x) {
        xpos--
    }
    if (ypos < final_y) {
        ypos++
    }

    if (ypos > final_y) {
        ypos--
    }
    elem.style.left = xpos + "px"
    elem.style.top = ypos + "px"
    //递归入口

    /* 问题
     1. '${elementID}',引号去掉为什么失效了
     2. setTimeout()也是同样的问题
     */
    var repeat = `moveElement('${elementID}',${final_x},${final_y},${interval})`
    movement = setTimeout(repeat, interval)

    //OR 
    //movement = setTimeout(`moveElement('${elementID}',${final_x},${final_y},${interval})`, interval)

    
    
}