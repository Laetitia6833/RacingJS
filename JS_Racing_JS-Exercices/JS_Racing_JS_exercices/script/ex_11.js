window.onload = () => {
var footer = document.getElementsByTagName("footer")[0];
var loc = footer.getElementsByTagName("div")[0];
var link = loc.getElementsByTagName("a")[0];


const loc2 = document.createElement("div");
const btn = document.createElement("button");
footer.appendChild(loc2);
loc2.appendChild(btn);
btn.innerHTML = "Delete cookie";
loc2.style.display = "none";


    link.addEventListener("click", function(){
        loc.style.color = "white";
        loc2.style.display = "block";
        loc.firstElementChild.style.visibility = "hidden";
        setCookie("acceptsCookies", true, 1)
    })
    btn.addEventListener("click", function(){
        loc.style.color = "black";
        loc2.style.display = "none";
        loc.firstElementChild.style.visibility = "visible";
        deleteCookie("acceptsCookies")
    })
}
function setCookie(setName, setContent, expirTime){
    var now = new Date();
    now.setTime(now.getTime() + (expirTime*1000*36000));
    let expires = "expires=" + now.toUTCString();
    document.cookie = setName + "=" + setContent + "; " + expires + ";path=/";
   };

function deleteCookie(setName){
    setCookie(setName, "", 0);
    
   }














