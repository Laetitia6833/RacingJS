window.onload = function() {
var loc = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];

document.addEventListener("keypress", function(keyboard){
    loc.innerText += keyboard.key;
    loc.innerText = loc.innerText.substr(-42);
})
    



};