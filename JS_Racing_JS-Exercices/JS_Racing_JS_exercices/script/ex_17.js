window.onload = function() {
    
  
  
  
  
  // window.addEventListener('DOMContentLoaded', () => {
          var images = ['https://unsplash.com/photos/cssvEZacHvQ',
          'https://unsplash.com/photos/1Z2niiBPg5A',
          'https://unsplash.com/photos/jFCViYFYcus',
          'https://unsplash.com/photos/-f0YLss50Bs',
          'https://unsplash.com/photos/xUUZcpQlqpM',
          'https://unsplash.com/photos/L-2p8fapOA8',
          'https://unsplash.com/photos/xgTMSz6kegE',
          'https://unsplash.com/photos/Q1p7bh3SHj8',
          'https://unsplash.com/photos/zepnJQycr4U',
          'https://unsplash.com/photos/Jztmx9yqjBw'] 
          var box = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
        
          var canvas = document.createElement("canvas");
          context = canvas.getContext('2d');
          box.appendChild(canvas);
          canvas.style.height = "600px"
          canvas.style.width = "600px"
          canvas.style.background = "white"
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const c = canvas.getContext('2d');

  images.forEach(function(url, index, originalArray){
    var img = document.createElement('img');
    img.src = url;
    canvas.appendChild(img)
  })



// for(let i = 0; i<images.length; i++ ){
//   let image = new Image();
//   image = document.createElement("image");
//   canvas.append("image");
//   image.src = images[i];
// }

//   // let image = new Image(); // first image
//   // image.src = 
//   // let image2 = new Image(); // second image
//   // image2.src = 'https://www.highreshdwallpapers.com/wp-content/uploads/2013/03/Avengers-A.jpg';
//   // let height = 20;

//   let loader = img => new Promise(resolve => {
//     // resolve the arguments as an Array
//     img.onload = e => resolve([img, 0, height, 100, 60]);
//     // force resetting the src, otherwise onload may already have fired
//     img.src = img.src;
//   });

//   async function loadImages() {
//     const a = await loader(images);
//     // height += 80;
//     // const b = await loader(image2);
//     // you must return something if you it to be passed in the then()
//     return [a, b];
//   };

//   loadImages().then(arr => {
//     arr.forEach(args => c.drawImage.apply(c, args));
//   }).catch(console.error);
// });
// let base64urls = [];
 
// Promise.all(urls.map(url => fetch(url))).then(res => toBase64DataURL(res)).then(result => {base64urls.push(result.toDataURL());
// console.log(base64urls);});

// function toBase64DataURL(src) {
//   return new Promise(resolve => {
// const image = new Image();
// image.crossOrigin = 'Anonymous';

// image.onload =  _=> {
//   const canvas = document.createElement('canvas');
//   const context = canvas.getContext('2d');
//   canvas.height = this.naturalHeight;
//   canvas.width = this.naturalWidth;
//   context.drawImage(this, 0, 0);
//   const dataURL = canvas.toDataURL('image/jpeg');
//   resolve(dataURL);
// };
// image.src = src;
//   });
// }

//     const obj = {
//   async drawImages(ctx, images) {
//     return new Promise((resolve, reject) => {
//       const img = images.shift();
//       const imgToDraw = new Image();
//       imgToDraw.src = img.src;
//       imgToDraw.onload = () => {
//         ctx.drawImage(imgToDraw, img.x, img.y, img.w, img.h);
//         if (images.length > 0) {
//           resolve(this.drawImages(ctx, images));
//         } else {
//           resolve();
//         }
//       };
//       imgToDraw.onerror = reject;
//     });
//   }
// };

// (async () => {
//     var images = [
        // 'https://unsplash.com/photos/cssvEZacHvQ',
        // 'https://unsplash.com/photos/1Z2niiBPg5A',
        // 'https://unsplash.com/photos/jFCViYFYcus',
        // 'https://unsplash.com/photos/-f0YLss50Bs',
        // 'https://unsplash.com/photos/xUUZcpQlqpM',
        // 'https://unsplash.com/photos/L-2p8fapOA8',
        // 'https://unsplash.com/photos/xgTMSz6kegE',
        // 'https://unsplash.com/photos/Q1p7bh3SHj8',
        // 'https://unsplash.com/photos/zepnJQycr4U',
        // 'https://unsplash.com/photos/Jztmx9yqjBw'
    // ]
    // console.log(images);
  // picsum.photos doesn't fill all the indexes...
  // const urls = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];
  // const s = 200; // image size
  // const w = 200;
  // for(let i=0; i<images.length; i++) {
  //   images.src = images[i]
  //   images.push( {
  //     src: `https://picsum.photos/${s}/${w}?image=10` + urls[i],
  //     x: (i%3)*s,
  //     y: Math.floor(i/3)*s,
  //     w: s,
  //     h: s
  //   });
  // }
  //  images.push( {
  //     src: `https://picsum.photos/${x}/${width}` + urls[i],
  //     x: Math.floor(Math.random() * (canvas.width - 25)),
  //     y: Math.floor(Math.random() * (canvas.height - 25)),
  //     width: 25, 
  //     height: 25 
  //   });
//   const ctx = canvas.getContext('2d');
//   await obj.drawImages(ctx, images);
//   // fill a green rect over to show we are able to await it
//   ctx.fillStyle = 'rgba(0,0,0,0)';
//   ctx.fillRect(0,0,canvas.width,canvas.height);
// })();
//     const obj = {
//   async drawImages(context, images) {
//     return new Promise((resolve, reject) => {
//       const img = images.shift();
//       const imgToDraw = new Image();
//       imgToDraw.src = img.src;
//       imgToDraw.onload = () => {
//         context.drawImage(imgToDraw, img.x, img.y, img.w, img.h);
//         if (images.length > 0) {
//           resolve(this.drawImages(ctx, images));
//         } else {
//           console.log("I - Processing");
//           resolve();
//         }
//       };
//       imgToDraw.onerror = reject;
//     });
//   }
// };

// (async () => {
//   const images = [];
//   // picsum.photos doesn't fill all the indexes...
//   const urls = ["01", "02", "03", "04", "05", "06", "7", "8", "9", "10", "11"];
//   const s = 50; // image size
//   for(let i=0; i<10; i++) {
//     images.push( {
//       src: `https://picsum.photos/${s}/${s}?image=10` + urls[i],
//       x: (i%5)*s,
//       y: Math.floor(i/5)*s,
//       w: s,
//       h: s
//     });
//   }

//   await obj.drawImages(context, images);
//   // fill a green rect over to show we are able to await it
//   context.fillStyle = 'rgba(0,0,0,0)';
//   context.fillRect(0,0,canvas.width,canvas.height);
// })();


    // function combineImage(images){
    //     var images = new Array();

    //     var img = new Image();
    //     img.onload = function(){
    //         context.drawImage(img, 20,80,220, 150)
    //     };
    //     img.src = images[0];
        
    // }
    // combineImage();
    // combineImage(images);
    // function combineImage(images){
    //     images.forEach(images => document.createElement('img'));
    // }
    // function combineImage(images);
        
    //     for (var i =0; i <images.length; i++ ){
    //         var image = new Image();
    //         image.src = images[i];
    //         image.onload = function(image, i){
    //             return function(){
    //                 context.drawImage(image, canvas.width*0.3 * i, 0, canvas.width*0.3, canvas.height)
    //             }
    //         } (image, i)
    //     }

// 
  }