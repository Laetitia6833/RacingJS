window.onload = function() {
var loc = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
var count = 1;
loc.onclick = function(){
    loc.innerText = count ++;
}

};
