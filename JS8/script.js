// const button = document.querySelector(".btn")
// button.addEventListener("click",function () {console.log("клик");})
// const buttonplus = document.querySelector(".btnplus")
// const buttonminus = document.querySelector(".btnminus")
// const buttonsbros = document.querySelector(".btnsbros")
// const title = document.querySelector("h1")
// let number = 0
// buttonplus.addEventListener("click",function () {
//    number++ 
//    title.innerText = number})
// buttonminus.addEventListener("click",function () { 
//       if (number >=1)
//       {number--}
//       else {number = 10}
//       title.innerText = number})  
// buttonsbros.addEventListener("click",function () {
//          number = 0
//          title.innerText = number})        

// const buttonplus = document.querySelector(".btnplus")
// const buttonminus = document.querySelector(".btnminus")
// const buttonsbros = document.querySelector(".btnsbros")
// const title = document.querySelector("h1")
// let number = 0
// buttonplus.addEventListener("click", function() {
//    if(number === 10) {
//        title.innerText = `${number} Это максимально допустимое значение`
//    } else {
//        number++ // number = number + 1
//        title.innerText = number // добавить текст number в h1
//    }
// })
// buttonminus.addEventListener("click",function () { 
//       if (number >=1)
//       {number--}
//       else {number = 10}
//       title.innerText = number})  
// buttonsbros.addEventListener("click",function () {
//          number = 0
//          title.innerText = number})     

// При нажатии на все кнопки - в консоли отображать "Кликнули"
// используя цикл for()

// const buttons = document.querySelectorAll("button")
// for (let i=0; i<buttons.length; i++) {
//    buttons[i].addEventListener("click",function(){
//       console.log("кликнули");
//    })
// }

// const numbers = [10, 20, 30, 40, 50]
// for (let i=0; i<numbers.length; i++) {
//    console.log(numbers[i]);
// }

// const numbers = [10, 20, 30, 40, 50]
// numbers.forEach(function(number){
//    console.log(number);
// })

// const names = ["Arsen", "Hanna", "Sergey", "Maria"]
// names.forEach(function(name) {
//    console.log(`привет, ${name}`);
// })

// const buttons = document.querySelectorAll("button")
// buttons.forEach(function(button){
//    button.addEventListener("click",function(
//       {console.log("кликнули")}
//    )
   
// }

// ========================================

// console.log(sum(10, 15)) // 25

// const mySum = sum(10, 15) // 

// // if(arr.length == 0) { return null }
// const username = "Arsen"
// username.length // длина строки - количество символов в строке 5
// Создать переменную, которая будет сохранять самую длинную строку в массиве

// const array = ["Arsen", "Ivan", "Kolya"]
// let max_length = 0
// for(let i = 0; i < array.length; i++) {
//     // console.log(array[i].length)
//     if(max_length < array[i].length) {
//         max_length = array[i].length
//     }
//     return max_length
// }
/*
    i = 0, array.length = 3
    1. i = 0, 0 < 3 - true, max_length < array[0].length, 0 < 5 - true, max_length = 5
    2. i = 1, 1 < 3 - true, max_length < array[1].length, 5 < 4 - false, max_length = 5
    3. i = 2, 2 < 3 - true, max_length < array[2].length, 5 < 5 - false, max_length = 5
*/

// 5, 4, 5

// function sum(a, b) {
//    return a + b
// }

// const mySum = sum(10, 15)

// console.log(mySum)

// ===============================================