function showSection(id) {
    var sections = document.getElementsByTagName("section")
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].getAttribute("id") != id) {
            sections[i].style.display = "none"
        } else {
            sections[i].style.display = "block"
        }
    }
}


function prepareInternalnav() {

    //init
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName("nav")) return false;
    //get elements
    var nav = document.getElementsByTagName("nav")
    var links = nav[1].getElementsByTagName("a")

    
    for (var i = 0; i < links.length; i++) {
        var sectionId = links[i].getAttribute("href").split("#")[1]
        console.log(sectionId);
        
        if(!document.getElementById(sectionId))continue;

        document.getElementById(sectionId).style.display = "none";
        links[i].destination = sectionId;
        links[i].onclick = function(){
            showSection(this.destination);
            return false
        }
    }

}


addLoadEvent(prepareInternalnav)