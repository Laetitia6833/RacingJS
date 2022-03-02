document.writeln('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" type="text/javascript"></sc'+'ript>');

window.onload = () => {
   var drag_drop = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
   var text = drag_drop.getElementsByTagName("i")[0];

   $(drag_drop).append('<img src = "" alt= "" />');
   $(drag_drop).append('<input type="file" id="myfile" hidden />');
   

   const inputElement = document.querySelector('input');
   const img = document.querySelector('img');


   drag_drop.addEventListener('dragover', (e) => {
      e.preventDefault();
   });

   drag_drop.addEventListener('drop', (e) => {
      e.preventDefault();
      img.style = "display:block;";
      let dropped = e.dataTransfer.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(dropped);
      reader.onloadend = function () {
         e.preventDefault();
         text.style = "display:none;";
         let src = this.result;
         img.src = src;
         img.alt = dropped.name;
      };
   });



}