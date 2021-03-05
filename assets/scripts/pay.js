 
  let foodItems = []

  fetch('http://127.0.0.1:5000/show-products/')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    foodItems = data;
  })

  function showItems(category){
    let shownItemList = document.getElementById('a');
    shownItemList.innerHTML = '';

    let filteredProducts = foodItems.filter(foodItem => {
        return foodItem.type == category;
    })

    filteredProducts.forEach(item => {
        shownItemList.innerHTML += `
        <td><button class="addToCart" onclick="addToCart(${item.id})">${ item.products }<br><hr>${ item.prices }</button></td>
        `
    });
    console.log(filteredProducts);
  }
    // =====ADING TO THE CART=====

    let cart =[]

    fetch('http://127.0.0.1:5000/show-products/')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      cart = data;
    })

    function addToCart(item_id) {
      let shownItemList = document.getElementById('display');
      // shownItemList.innerHTML = '';

      let filteredProducts = cart.filter(foodcart => {
        return foodcart.id == item_id;
      })
      filteredProducts.forEach(item => {
        let total = parseInt(document.getElementById('total').innerHTML);
        let product_price = parseInt(item.prices.substring(1))
        total = total + product_price;
        shownItemList.innerHTML += `
        <p class="cart" style="color:white">${item.products} ${item.prices}</p>`
        document.getElementById('total').innerHTML = total;
      });
      console.log(filteredProductssss)
    }

      // =====POPUP=====

var modal = document.getElementById("myModal");
var btn = document.getElementById("pay");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}