// const title = document.querySelector("h1")
// const button = document.querySelector("button")
// button.addEventListener("click",function () {
//    console.log(title.innerText);
   
// })

// при нажатии на h1 должен отобразиться текст в консоле
// const title = document.querySelector("h1")
// const button = document.querySelector("button")
// title.addEventListener("click",function () {
//    console.log(title.innerText);
   
// })

// const image = document.querySelector("img")
// image.addEventListener("click",function () {
//       const src = image.getAttribute("src")
//       console.log(src)
//    })


// const images = document.querySelectorAll("img")
// for (let i=0; i<images.length;i++) {
//    images[i].addEventListener("click", function() {
//           const src = images[i].getAttribute("src");
//           console.log(src)
// })
// }


// const images = document.querySelectorAll("img")
// images.forEach(function(image) {
//    image.addEventListener("click",function () {
//             const src = image.getAttribute("src")
//             console.log(src)})
// })

// const imagefull = document.querySelector(".full-img")
// const images = document.querySelectorAll(".images-container img")
// images.forEach(function(image){
//    image.addEventListener("click",function(){
//       const srcimages = image.getAttribute("src")
//       imagefull.setAttribute("src", srcimages)
//    }
//    )
// }
// )
const square = document.querySelector(".square")
const but = document.querySelector("button")
but.addEventListener("click",function(){
   square.style.backgroundColor = "red"
})



