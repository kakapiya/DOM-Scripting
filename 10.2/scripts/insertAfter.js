//目的是为了插进节点中，不只是最后
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}