window.onload = function() { 

var box = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
var size = 100;
var coding = localStorage.getItem('image')
var reduc;
var resize;
  const img = document.createElement("img");
  img.src = coding;
  box.appendChild(img)
  img.style.width = "100%"

 box.onmouseenter= () => {
     clearInterval(resize)
   reduc = setInterval(() => {
        size=size-5;
        img.style.width = size+"%"
    }, 1000);
 }

  box.onmouseleave = () => {
      resize = clearInterval(reduc)
      img.style.width = "100%"
      size = 100
  }
  
 
  img.onclick = () => {
      clearInterval(reduc)
      window.localStorage.removeItem('image')
      box.removeChild(img);
      
   
    }

} 