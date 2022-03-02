window.onload = function() {
var loc = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
var canvas = loc.children;
loc.style.display = "flex";
loc.style.justifyContent = "center";


for(t = 0; t <canvas.length; t++){
  
    switch(window.getComputedStyle(canvas[t]).getPropertyValue("background-color"))
			{
				case  "rgb(0, 0, 0)":
					canvas[t].style.order = "3";
				break;
				case  "rgb(255, 165, 0)":
					canvas[t].style.order = "1";
				break;
				case "rgb(128, 128, 0)":
					canvas[t].style.order = "4";
				break;
				case  "rgb(128, 0, 128)":
					canvas[t].style.order = "2";
				break;
			}			    
        }
}