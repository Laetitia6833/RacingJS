window.onload = function() {
var box = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
box.style.fontSize = "10px"

fetch("https://data.education.gouv.fr/api/v2/catalog/datasets/fr-en-annuaire-education/records?limit=25&offset=0")
.then(response => response.json())
.then(data => {
    
data.records.forEach(element => {
    
    var commune = element.record.fields.nom_commune;
    var etablissement =element.record.fields.nom_etablissement;
    var mail = element.record.fields.mail;
    const pI = document.createElement("table");
    box.appendChild(pI);
    pI.innerHTML =  commune + " " + etablissement + " Contact : "  + mail ;
    
});
    
    
})
}