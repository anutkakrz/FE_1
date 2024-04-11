// console.log("hello");
// console.log('hello world')


// let a = document.querySelector('p')
// a.style.color = 'red'

// console.log(a);

// const user = []
// user.push('Anna')//добавляет элемент (в конце массива)
// console.log(user);
// user.push('Oleg')
// console.log(user)
// user.pop() //убирает элемент (с конца массива)
// console.log(user);

// user[1]=10 //задать значение массива вручную
// user[2]=7
// console.log(user);
// user[1]=25 //перезаписать значение массива вручную
// console.log(user);

// const product = [] //корзина товаров
// product.push('milk', 'butter')
// product.push('broad') // кнопка добавить
// console.log(product);

// // document.write(product)//вывод результата на страницу сайта

// // let arr = [1, 4, 2, 8, 5]
// // let newArr = []
// // for ( let i=0; i<arr.length; i++){
// //    newArr.push(arr[i]**2)
// // }
// // console.log(newArr)

// // let arr1 = [1, 4, 2, 8, 5]
// // let newArr1 = []
// // newArr1.push(arr1[0]**2)
// // newArr1.push(arr1[1]**2)
// // newArr1.push(arr1[2]**2)
// // newArr1.push(arr1[3]**2)
// // newArr1.push(arr1[4]**2)
// // console.log(newArr1)

// let user = ['anna', 'krz', '42']

// let userObj = {
//    firstname: 'anna', 
//    lastname: 'krz', 
//    age: '42'}// объект

// console.log(user);
// console.log(userObj);

// // document.write(userObj)

// console.log(userObj.firstname);//изменить значение элемента объекта (.firstname)
// userObj.age = 25
// console.log(userObj);

// userObj.height = 163 // добавить еще значение в объект (.height)
// console.log(userObj);

// userObj['height'] = 170 // второй вариант добавления элемента объекту
// console.log(userObj);

// let product = {
//    title: 'milk',
//    price: 40,
// }
// console.log(product);

// let products = [
//   { title: 'milk', price: 40, },
//   { title: 'coffe', price: 30, },
//   { title: 'tea', price: 50, }
// ] // массив с объектами

//    console.log(products);
//    console.log(products[0]);// вывести объект со всем содержимым массива в определенной ячейке ([0])
//    console.log(products[0].title);// вывести определенный элемент (title) объекта массива в определенной ячейке ([0])


// let title = prompt('ВВедие названи')
// let price = prompt('ВВедие цену')

// let products = [
//     {title: title, price: price},
//     {title: title, price: price},
//     {title: title, price: price},
// ]
// console.log(products);

// let title = prompt('ВВедие названи')
// let price = prompt('ВВедие цену')

// let title2 = prompt('ВВедие названи')
// let price2 = prompt('ВВедие цену')

// let title3= prompt('ВВедие названи')
// let price3 = prompt('ВВедие цену')

// let products = [
//     {title: title, price: price},
//     {title: title2, price: price2},
//     {title: title3, price: price3},
// ]

// console.log(products);


let products = [
   {
      title: 'milk',
      price: 40,
      count: true
   },
   {
      title: 'coffe',
      price: 30,
      count: false
   },
   { title: 'tea', price: 50, count: true }
] 

for (let i = 0; i < products.length; i++) 
   // console.log(`${products[i].title} цена: ${products[i].price}$`);

// if (products[i].price > 35) {
//    console.log(products[i].title);
// }
 
if (products[i].count === true) {
   console.log(products[i].title);
} 
