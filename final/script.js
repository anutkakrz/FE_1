// 1. Есть массив products. Отрисовать продукты из этого массива 
const productsContainer = document.querySelector(".products")
const form = document.querySelector("form")
const productName = document.querySelector(".product-name")
const productPrice = document.querySelector(".product-price")


const products = [
   {
       name: "Молоко",
       price: 100
   },
   {
       name: "Кефир",
       price: 150
   },
   {
       name: "Сахар",
       price: 140
   }
]

function showProducts() {
    productsContainer.innerHTML=""
    products.forEach(function(product, index){
        productsContainer.innerHTML+=
       ` <div class="product">
            <h5>${product.name}</h5>
            <p>${product.price}</p>
            <button class="delete-btn id=${index} ">Удалить</button>
        </div>`
    
    })
}
showProducts()

form.addEventListener("submit", function(event){
    event.preventDefault()
    const product = {
        name: productName.value, 
        price: productPrice.value
    }
    products.push(product)
    clearInputs()
    showNotification()
    showProducts()
    deleteProduct()
})

function clearInputs() {
    productName.value = ""
    productPrice.value = ""
}

function showNotification(){
    const notification = document.querySelector(".notification")
    notification.style.display = "block" 
    setTimeout(function(){
        notification.style.display = "none"
    }, 3000
    )
}

function deleteProduct() {
    const deleteBtns = document.querySelectorAll(".delete-btn")
    deleteBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        btn.parentElement.remove()
        const currentIndex = btn.id
        products.splice(currentIndex,1)

    })
    })
}
deleteProduct()


// 2. При отправке формы отображать в консоли введенные название и цену товара
/*
       <div class="product">
           <h5 class="product-name">Название</h5>
           <p class="product-price">Цена</p>
       </div>
*/