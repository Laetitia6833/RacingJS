window.onload = function() { 

var box = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
var url = document.getElementsByTagName("a")[0];

    
localStorage.setItem("image", url);

var coding = localStorage.getItem('image')
// box.innerHTML = "<img src='"+coding+ "'>"
  const img = document.createElement("img");
  img.src = coding;
  box.appendChild(img)
  img.style.width = "100%"

}