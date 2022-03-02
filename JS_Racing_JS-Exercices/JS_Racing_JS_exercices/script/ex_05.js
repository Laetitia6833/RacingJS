window.onload = function() {
var loc = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
var btn1 = loc.children[0];
var btn2 = loc.children[1];
var px = 16;
var body = document.body;
var select = loc.children[2];

btn1.onclick = function(){
    px++;
    body.style.fontSize = px + "px";
}

btn2.onclick = function(){
    px--;
    body.style.fontSize = px+ "px";
}

select.onchange = function(){
    value = select.value;
    body.style.background = value;
}

};