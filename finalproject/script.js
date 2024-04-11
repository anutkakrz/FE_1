const form = document.querySelector("form")
const username = document.querySelector(".username")
const age = document.querySelector(".userage")
const usersContainer = document.querySelector(".users")

const users = [
   {
      name:"Vyacheslav",
      age:"100"
   },
   {
      name:"Arsen",
      age:"25"
   },
   {
      name:"Stefan",
      age:"90"
   }
]

 
form.addEventListener("submit", function(event) {
   event.preventDefault() // отменяем действие по умолчанию
   console.log(username.value) // Отобразить данные из input username
   console.log(age.value) // Отобразить данные из input age
   const user = {
       name: username.value,
       age: age.value
   }
   users.push(user) 
   showUsers()
})


function showUsers() {
   usersContainer.innerHTML = "" //очищаем контейнер перед отображением новый пользователей
   users.forEach(function(user){
      usersContainer.innerHTML += `
      <div class="user">
      <h5>${user.name}
      <p>${user.age}</p>
      </div>
      `
   })
}
showUsers()