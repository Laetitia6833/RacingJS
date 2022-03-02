window.onload = function() {
	
	var x = 0, y = 0;
    var posX;
	var posY;
    var footer = document.getElementsByTagName("footer")[0];
    var div0 = footer.children[0];
    var div1 = footer.children[1];
    
    var carre = div0.children[0];
	carre.draggable =true;

	const pos = carre.style.position = "relative";
   
	carre.addEventListener(`dragstart`, event => {
	  	event.dataTransfer.setData('text', "");
		posX = event.pageX;
		posY = event.pageY;
	});
	div0.addEventListener(`drop`, event => {		
        x += posX - event.pageX;
    	y += posY - event.pageY;
    	carre.style.bottom = `${y}px`;	
    	carre.style.right = `${x}px`;
	});
    div0.addEventListener(`dragover`, event => {
        var x = event.screenX;
        var y = event.screenY; 
		event.preventDefault();
        div1.innerText = `Nouvelles coordonnées => {x:${x}, y:${y}}`;	 

    });
	
}
