// function showThousandElements() {
//    console.log("запрос в базу данных");
//    console.log("отформатировать данные");
//    console.log("отобразить данные в html");
// } // создание функции
// showThousandElements() //вызов функции

// function showElements(number) {
//    console.log(`запрос в базу на ${number} данных`);
//    console.log("отформатировать данные");
//    console.log("отобразить данные в html");
// } // создание функции
// showElements(100) //вызов функции
// showElements(350) //вызов функции

// function power (num1,num2) {
//    num3 = num1**num2
// console.log(num3);
// }
// power(10,2)
// power(3,5)

// function square(num1,num2) {
//    let sqr = num1*num2
//    console.log(`${sqr} квадратов`);
// }
// square(10,5)

// function user() {
// let user = prompt("Введите ваше имя")
// let age = prompt("Введите ваш возраст")
// console.log(`вас зовут ${user} и вам ${age} лет`);
// }
// user()

// function checkNumber(number) {
//    if (number%2===1){
//       console.log("нечетное");
//    }
//    else console.log("четное");
// }
// checkNumber(8)

// function showNumbers(num) {

//    for ( let i = 0; i<=num; i++)
//    {console.log(i)}
// }
// showNumbers(18)

// function showNumbers(num) {
//    const massiv = []
//    for ( let i = 0; i<=num; i++)
//    {  massiv.push(i)
// }
// console.log(massiv)}
// showNumbers(10)
// showNumbers(100)

function max(num1,num2){
   if (num1<num2) {
      console.log(num2)
   }
   else if (num1===num2) {
      console.log(`${num1} равно ${num2}`)
   }
   else {console.log(num1);}
   
}
max(12,9)
