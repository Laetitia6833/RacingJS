window.onload = function() {
var loc = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
var name = "";
loc.onclick = function(){
    name = prompt("What is your name ?");
    if(name!="" && name!=null){
        var conf = confirm("Are you sure "+name+ " is your name ?");
    } if(conf == true){
        loc.innerText = "Hello "+ name + " !";
        alert("Hello "+ name + " !");
    } 

}

};