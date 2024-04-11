//первый способ создания елемента
// const title = document.createElement("h1")
// title.innerText = "Hello world"
// const main = document.querySelector("main")
// main.appendChild(title)


// const main = document.querySelector("main")
// main.innerHTML += "<h1>Hello world</h1>"

// const main = document.querySelector("main")
// main.innerHTML += "<p>hello</p>"

// const main = document.querySelector("main")
// for (let i=0; i<20; i++) {
//    main.innerHTML += `<p>${i}</p>`
// }

// const names = ["Arsen", "Esmira", "Hanna", "Artem", "Vasylyna"]
// const main = document.querySelector("main")
// for (let i=0; i<names.length; i++) {
//       main.innerHTML += `<p>${names[i]} </p>`
//    }

// const links = ["https://placehold.co/600x400/png", "https://placehold.co/320x480/png", "https://placehold.co/300x200/png"]
// const main = document.querySelector("main")
// for (let i=0; i<links.length; i++) {
//       main.innerHTML += `<img src=${links[i]}>`
//    }

// const links = [
//    {
//        name: "Google",
//        link: "https://google.com"
//    },
//    {
//        name: "Amazon",
//        link: "https://amazon.com"
//    },
//    {
//        name: "Youtube",
//        link: "https://youtube.com"
//    }
// ]
// // for (let i=0; i<links.length; i++) {
// //    console.log(`${links[i].name}: ${links[i].link}`);
// // }
// const main = document.querySelector("main")
// for (let i=0; i<links.length; i++) {
//    main.innerHTML += `<a href="${links[i].link}">${links[i].name}</a> `;
// }


const users = [
   {
       name: "Arsen",
       age: 25
   },
   {
       name: "User 1",
       age: 30
   },
   {
       name: "User 2",
       age: 40
   },
   {
       name: "User 3",
       age: 35
   }
]
const main = document.querySelector("main")
for (let i=0; i<users.length; i++) {
   main.innerHTML += 
   `<div class="user">
   <h1>${users[i].name}</h1>
   <p>${users[i].age}</p>
   </div>`}

