//点击label聚焦输入
function focusLabels() {
    if (!document.getElementsByTagName) return false;
    var labels = document.getElementsByTagName("label")

    for (var i = 0; i < labels.length; i++) {
        if (!labels[i].getAttribute("for")) continue;
        labels[i].onclick = function () {
            var id = this.getAttribute("for")
            if (!document.getElementById(id)) return false;
            var element = document.getElementById(id);
            element.focus();
        }
    }
}

function isFilled(field) {
    return (field.value.length > 1 && field.value != field.placeholder);
  }
  
  function isEmail(field) {
    return (field.value.indexOf("@") != -1 && field.value.indexOf(".") != -1);
  }

function validateForm(whichform) {
    for (var i=0; i<whichform.elements.length; i++) {
      var element = whichform.elements[i];
      if (element.getAttribute("required") == 'required') {
        if (!isFilled(element)) {
          alert("Please fill in the "+element.name+" field.");
          return false;
        }
      }
      if (element.getAttribute("type") == 'email') {
        if (!isEmail(element)) {
          alert("The "+element.name+" field must be a valid email address.");
          return false;
        }
      }
    }
    return true;
  }

function prepareForms() {
    
    for (var i=0; i<document.forms.length; i++) {
      var thisform = document.forms[i];
      thisform.onsubmit = function() {
        validateForm(thisform)
      }
    }
  }

addLoadEvent(prepareForms);