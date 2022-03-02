 document.writeln('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" type="text/javascript"></sc'+'ript>');
document.writeln('<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></sc'+'ript>')

window.onload = function() {
var loc = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
loc.style.height = "300px"
const img = document.createElement("input");
img.style.width = "220px";
img.style.textAlign = "center";
img.placeholder = "Choisir une date"
  
  loc.appendChild(img)

$(function (){
    $("input").datepicker({
        dateFormat: 'DD d MM yy',
        
        
    });
});


}