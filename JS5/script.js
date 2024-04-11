// const title = document.querySelector("h1") // найти  h1 на странице  и сохранить в переменной title
// title.innerText = "Hello Arsen" //отобразить или поменять! переменную title

// const myTitle = document.querySelector(".title-2") //поиск и фиксация в mytitle
// console.log(myTitle.innerText) //отобразить в консоли, .innerText позволяет отобразить текстовое значение

// const mainTag = document.querySelector("main")
// const mainTitle = mainTag.querySelector("h1")
// console.log(mainTitle.innerText); //поиск h1 в main (вначале находим маин затем в нем ш1)

// const mainTitle = document.querySelector("main h1")
// console.log(mainTitle.innerText); //тоже что и выше но проще запись

// const lorem10 = document.querySelector("p")
// const Hellooo = document.querySelector("main .my-text")
// const mtd = document.querySelector(".descr")
// const lorem5 = document.querySelector("footer p")
// console.log(lorem10.innerText, Hellooo.innerText, mtd.innerText, lorem5.innerText)

// const titles = document.querySelectorAll("h1")
// console.log(titles);
//titles.innerText = "hello my friend" // это не работает т.к. иннерТекст не срабатывает с массивом в таком виде, нужно обращаться к массиву:
// titles[0].innerText = "hello my friend"
// titles[1].innerText = "hello my friend"
// titles[2].innerText = "hello my friend"

// for (let i=0; i<titles.length; i++) {
//    titles[i].innerText= "hello my friend"
// }

// const par = document.querySelectorAll("p")
// for (let i=0; i<par.length; i++) {
//    par[i].innerText= "My beautiful text"
// }

// const image = document.querySelector("img") //найти катринку
// const imageSource = image.getAttribute("src") //
// // console.log(imageSource);
// image.setAttribute("src", "./img2.jpg")

// const images = document.querySelectorAll("img")
// for (let i=0; i<images.length; i++) {
//    images[i].setAttribute("src",` ./img${i+1}.jpg`)
// }

// const imag = [ "./elki.jpg", "./gori.jpg", "./les.jpg", "./ozero.jpg", "./reka.jpg" ]
// const images = document.querySelectorAll("img")
// for (let i=0; i<images.length; i++) {
//    images[i].setAttribute("src",imag[i])
// }

