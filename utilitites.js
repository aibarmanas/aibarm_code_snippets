// Check values if letter or number
String.prototype.isLetter = function() {
    return this.length === 1 && this.match(/[A-Z|a-z]/i);
}
String.prototype.isNum = function (){
    if(isNaN(parseInt(this)))return false;
    if(!isNaN(parseInt(this)))return true;
}

//From stackoverflow
// Selection utilitites function
const selection = window.getSelection()
const headerElement = document.querySelector('#element')
selection.setBaseAndExtent(headerElement,0,headerElement,1)


function highlight(text) {
    var inputText = document.getElementById("inputText");
    var innerHTML = inputText.innerHTML;
    var index = innerHTML.indexOf(text);
    if (index >= 0) { 
        innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
        inputText.innerHTML = innerHTML;
    }
}


