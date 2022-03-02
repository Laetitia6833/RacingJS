window.onload = function() {
( function() { 	
var audio = new Audio('triangle.ogg');
    var footer = document.getElementsByTagName("footer")[0];
    var div0 = footer.children[0];
    var carre = div0.children[0];

    var div1 = footer.children[1];
    var pause = div1.children[0];
    var stop = div1.children[1];
    var mute = div1.children[2];
		

    var triangle = document.querySelector('canvas')
    var triangle=carre.getContext('2d');
    triangle.beginPath();
    triangle.strokeStyle = "white";
	triangle.moveTo(6, 6);
	triangle.lineTo(14, 10);
	triangle.lineTo(6, 14);
	triangle.closePath();
	triangle.stroke();
    triangle.fill();
		  
    
    // audio.play();
        carre.onclick = function (){
            audio.play();
            
        }
        pause.onclick = function(){
            audio.pause();
        }
        stop.onclick = function (){
            audio.pause();
            audio.currentTime = 0.0;
        }
        mute.onclick = function (){
            audio.muted = (audio.muted === true) ? false : true;
        }

	})();
}

