window.onload = function() { 

var box = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
var btn = box.getElementsByTagName("button")[0];


btn.onclick = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(blob => {

    var textToSave = JSON.stringify(blob)
    var hiddenElement = document.createElement('a');

hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
hiddenElement.target = '_blank';
hiddenElement.download = 'API.txt';
hiddenElement.click();

        
    })
}

}
