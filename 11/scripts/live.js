function stripeTables() {
  if (!document.getElementsByTagName) return false;
  var tables = document.getElementsByTagName("table");

  //添加样式
  for (var i = 0; i < tables.length; i++) {
    var odd = false;
    var rows = tables[i].getElementsByTagName("tr");
    for (var j = 0; j < rows.length; j++) {
      if (odd == true) {
        addClass(rows[j], "odd");
        odd = false;
      } else {
        odd = true;
      }
    }
  }
}

function highlightRows() {
  if (!document.getElementsByTagName) return false;
  var rows = document.getElementsByTagName("tr");

  for (var i = 0; i < rows.length; i++) {
    rows[i].oldClassName = rows[i].className  
    rows[i].onmouseover = function () {
      addClass(this, "highlight");
    }
    rows[i].onmouseout = function () {
      this.className = this.oldClassName
    }
  }
}

//生成缩略词表
function displayAbbreviations() {
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
  var abbreviations = document.getElementsByTagName("abbr");
  if (abbreviations.length < 1) return false;
  var defs = new Array();
  
  //生成字典
  for (var i = 0; i < abbreviations.length; i++) {
    var current_abbr = abbreviations[i];
    if (current_abbr.childNodes.length < 1) continue;
    var definition = current_abbr.getAttribute("title");
    var key = current_abbr.lastChild.nodeValue;
    
    //键值对数组
    defs[key] = definition;
  }

  //definition list 定义列表
  var dlist = document.createElement("dl");
  for (key in defs) {
    var definition = defs[key];
    //定义头
    var dtitle = document.createElement("dt");
    var dtitle_text = document.createTextNode(key);
    dtitle.appendChild(dtitle_text);

    //定义内容
    var ddesc = document.createElement("dd");
    var ddesc_text = document.createTextNode(definition);
    ddesc.appendChild(ddesc_text);

    //依次添加头和内容
    dlist.appendChild(dtitle);
    dlist.appendChild(ddesc);
  }

  //定义列表init
  if (dlist.childNodes.length < 1) return false;
  var header = document.createElement("h3");
  var header_text = document.createTextNode("Abbreviations");
  header.appendChild(header_text);

  //在文章后添加附录
  var articles = document.getElementsByTagName("article");
  if (articles.length == 0) return false;
  articles[0].appendChild(header);
  articles[0].appendChild(dlist);
}

addLoadEvent(stripeTables)
addLoadEvent(highlightRows)
addLoadEvent(displayAbbreviations)