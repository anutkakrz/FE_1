// // let   _num1, $num2, num3
// // camelCase
// // snack_case

// // number
// 10, 12.45, -10
// Infinity, -Infinity, NaN
// console.log(10/0) //Infinity
// console.log(-10/0) //-Infinity
// console.log("John"/20) //NaN
// console.log("John"*20) //NaN


// // string
// "string", 'string', `string`

// // boolean
// // object

// console.log('2'+2); //'22'
// console.log('2'+'2'-'2'); //'22'-'2' //20
// // '10' - '2' = 8
// // '10' * 3 = 30

// let num1 = +prompt("enter the number"); //неявный метод
// let num2 = Number(prompt("enter the number")); //явный метод


// let user_age = +prompt("введите ваш возраст")
// if (user_age>18) {
//    console.log("Доступ получен");
// }
// else if(user_age<=18){
//    console.log("Доступ закрыт");
// }
// else{
//    console.log("ошибка");
// // }

// let d = 7
// console.log(d);
// console.log(d**2);
// console.log(d**3);

// let a = +prompt("введите первое число")
// let b = +prompt("введите второе число")
// let sub = a-b
// let sum = a+b
// let mult = a*b
// console.log(`Разность чисел ${a} и ${b}  равна ${sub}, сумма чисел равна ${sum}, произведение равно ${mult}`);

// let UserName = prompt("Введите ваше имя")
// let UserSurname = prompt("Введите вашу фамилию")
// let UserAge = +prompt("Введите ваш возраст")

// console.log(`Hello, my name is ${UserName} ${UserSurname}. I'am ${UserAge}`); // интерполяция
// console.log("Hello, my name is " + UserName +' '+ UserSurname + ". I'am " + UserAge ); //конкатенация