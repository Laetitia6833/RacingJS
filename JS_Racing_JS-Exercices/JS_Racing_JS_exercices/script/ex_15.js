window.onload = function(){
    var box = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
    var dot = box.getElementsByTagName("span")[0]; 
        
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response =>response.json())
        .then(data => {
            var rateEuro = 0
            var localVal = localStorage.getItem("bitcoin")
            var rateEuro = data.bpi.EUR.rate

            if (localVal === rateEuro) {
                dot.style.background = "#FFA500"
            }
            if (localVal < rateEuro) {
                dot.style.background = "#008000"
            }
            if (localVal > rateEuro){
                dot.style.background = "#FF0000"
            }
            
            localStorage.setItem("bitcoin", rateEuro)
        })
            
    
        
        
    }
