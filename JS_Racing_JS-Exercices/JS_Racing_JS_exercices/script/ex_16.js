document.writeln('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" type="text/javascript"></sc'+'ript>');

window.onload = function() {
    
    var footer = document.getElementsByTagName("footer")[0];
    var div0 = footer.children[0];
    var div1 = footer.children[1];
    
    var btn = div0.getElementsByTagName("input")[0]
    var submit = div0.getElementsByTagName("input")[1]




// $(function () {
//     $(submit).bind("click", function () {
//         var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.txt)$/;
//         if (regex.test($(btn).val().toLowerCase())) {
//             if (typeof (FileReader) != "undefined") {
//                 var reader = new FileReader();
//                 reader.onload = function (e) {
//                     var table = $("<table />");
//                     var rows = e.target.result.split("\n");
//                     for (var i = 0; i < rows.length; i++) {
//                         var row = $("<tr />");
//                         var cells = rows[i].split(",");
//                         for (var j = 0; j < cells.length; j++) {
//                             var cell = $("<td />");
//                             cell.html(cells[j]);
//                             row.append(cell);
//                         }
//                         table.append(row);
//                     }
                    
//                     $(div1).append(table);
//                 }
//                 div1.innerHTML = reader.readAsText($(btn)[0].files[0]);
//             } else {
//                 alert("This browser does not support HTML5.");
//             }
//         } else {
//             alert("Please upload a valid CSV file.");
//         }
//     });
// });



//     jQuery(document).ready(function($){

// // Click button to activate hidden file input
// $(submit).on('click', function(){
// $(btn).click();
// });

// // Click above calls the open dialog box
// // Once something is selected the change function will run
// $(btn).change(function(){

// // Create new FileReader as a variable
// var reader = new FileReader();

// // Onload Function will run after text has loaded
// reader.onload = function(file){

// // Get Base64 encoded contents
// var fileContent = file.target.result;
// // Remove the data type
// // This will remove 'data:text/plain;base64,'
// var removeType = fileContent.substr(fileContent.indexOf(',') + 1);
// // Finally decode using window.atob and append
// $(div1).append(window.atob(removeType));
// }
// div1.innerText = reader.readAsDataURL(this.files[0]);

// // Get the selected video from Dialog


// });

// });
// const readAsText = function(blob) {
//   return new Promise(function(resolve, reject) {
//     const reader = new FileReader();
//     reader.onload = function(event) {
//       resolve(event.target.result);
//     };
//     reader.onerror = reject;
//     reader.readAsText(blob);
//   });
// };

// btn.onchange = function(event) {
//   if ( event.target.files && event.target.files[0] ) {
//     const p = readAsText(event.target.files[0]);
//     p.then(function(arg) {
//       submit.innerText = arg;
//     }, function(arg) {
//       div1.innerText = ('Failed: ' + arg);
//       console.log(arg); 
  
//     });
//   }
// };



// const readUploadedFileAsText = (inputFile) => {
//   const temporaryFileReader = new FileReader();

//   return new Promise((resolve, reject) => {
//     temporaryFileReader.onerror = () => {
//       temporaryFileReader.abort();
//       reject(new DOMException("Problem parsing input file."));
    };

//     temporaryFileReader.onload = () => {
//       resolve(temporaryFileReader.result);
//     };
//     temporaryFileReader.readAsText(inputFile);
//   });
// };

// async function pick() {

//   btn.click();
//   return new Promise((resolve,reject) => {
//     file.addEventListener("change", e => {
//       var reader = new FileReader();
//       reader.addEventListener('load', file => resolve(file.target.result));
//       reader.addEventListener('error', reject);
//       var text = reader.readAsDataURL(e.target.files[0]);
//     });
//   });
// }

// // Only call this function on a user event

// submit.onclick = async function() {
//   var file = await pick();
//   div1.innerHTML = text;
// }
// const readUploadedFileAsText = (inputFile) => {
//     const temporaryFileReader = new FileReader();


//   return new Promise((resolve, reject) => {
//     temporaryFileReader.onerror = () => {
//       temporaryFileReader.abort();
//       reject(new DOMException("Problem parsing input file."));
//     };

//     temporaryFileReader.onload = () => {
//       resolve(temporaryFileReader.result);
//     };
//     temporaryFileReader.readAsText(inputFile);
//   });
// };

// const handleUpload = async (event) => {
//   const file = event.target.files[0];
//   const fileContentDiv = div1

//   try {
//     const fileContents = await readUploadedFileAsText(btn)  
//     fileContentDiv.innerHTML = div1
//   } catch (e) {
//     fileContentDiv.innerHTML = e.message
//   }
  
//   btn.addEventListener('change', handleUpload)

// }



   
// btn.onchange(){

//     function readerFile(fichier){
//         return new Promise((resolve, reject)=> {
//             var fr = new FileReader();
//             fr.onload = () => {
//                 resolve(fr.result)
//             };
//             fr.onerror = reject;
//             fr.readAsText(file.blob)
//         })
//     }
// }

    // fichier.onchange = function(){
    //     var reader = new FileReader();
    //     var text = new Promise(function(resolve, reject){
    //         resolve(reader.readAsDataURL(fichier.files[0]));
    //     });
    //     text.then(function(){
    //         reader.onload = function(){
    //             div1.innerHTML = text
    //         }
    //     })
    // }

    
//  const readAsText = function(blob){
//         return new Promise(function(resolve, reject){
//             const reader = new FileReader();
//             reader.onload = function(event){
//                 resolve(event.target.result);
//             };
//             reader.onerror = reject;
//             reader.readAsText(blob);
//             console.log(blob);
//         });
//     };
//     submission.onchange = function(event) {
//         if(event.target.files && event.target.files[0]);
//         const p = readAsText(event.target.files[0]);
//         p.then(function(arg){
//             div1.innerHTML = arg;
//         });
//     }
// fichier.onchange = function fileRead()
// {
//     return new Promise((resolve, reject) => {
//         let reader = new Blob();
//         reader.onload = () => {
//             resolve(reader.result);
//         };
//         reader.onerror = reject;
//         reader.readAsArrayBuffer(fichier);
//     })

// }
// submission.onclick = function toString(arrayBuffer, decoderType = 'utf-8' ){
//     let decoder = new TextDecoder(decoderType);
//     return decoder.decode(arrayBuffer);
// }
// async function processFile(fichier) {
//     try {
//         let arrayBuffer = await readFileAsync(fichier);
//         let first20bytes = arrayBufferToString(arrayBuffer.slice(0.20));
//         div1.innerHTML = first20bytes;
//     } catch (err) {
//         alert(err);
//     }
// }
// submission.addEventListener('click', () => {
//     let file = fichier;
//     processFile(file.files[0])
// })
// }


   
   


    // const readAsText = function(blob){
    //     return new Promise(function(resolve, reject){
    //         const reader = new FileReader();
    //         reader.onload = function(event){
    //             resolve(event.target.result)
    //         };
    //         reader.onerror = reject;
    //         reader.readAsText(blob);
    //     });
    // };
    
    // fichier.onchange = function(event){
    //     if(event.target.files && event.target.files[0]){
    //         const txt = readAsText(event.target.files[0]);
    //         txt.then(function(arg){
    //             div1.innerHTML = arg;
    //         }, function(arg){
    //             div1.innerHTML = ('Failed:' + arg)
    //         })
    //     }
    // }

