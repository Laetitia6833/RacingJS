window.onload = function() { 

var box = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
var input = document.body.getElementsByTagName("input")[0];
var btn = document.body.getElementsByTagName("button")[0];


btn.onclick = () => {
    fetch("https://apicarto.ign.fr/api/codes-postaux/communes/"+input.value)
    .then(response => response.json())
    .then(data => {
        box.textContent = "";
        box.textContent = `Commune: ${data[0].nomCommune}, Libellé: ${data[0].libelleAcheminement}`;
    })
}

}


