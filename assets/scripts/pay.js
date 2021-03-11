 
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
        <td><button class="addToCart" onclick="addToCart(${item.id})">${ item.products }<br><hr>${ item.prices }</button></td>`
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
      console.log(filteredProducts)
    }


// =====SEARCH=====
function searchProducts(){
  let form = document.getElementById("search-box");
  let searchTerm = form.getElementsByTagName("input")[0].value;
  let searchReg = new RegExp(searchTerm, "i");

  fetch("http://127.0.0.1:5000/show-products/")
  .then((response) => response.json())
  .then((json) => {

    let result = json.filter((category) => {
      return category.products.search(searchReg) !== -1;
    });
    if (result.length > 0) {
      document.getElementById("display-items").innerHTML = "";
      result.forEach((item) => showItems(item));
    }
    else {
      alert("Not Found");
    }
  })
  .catch((erro) => {
    console.log(erro);
  })
}


// ========CHECKOUT========
function checkout() {
  let total = document.getElementsByClassName("paying")[0].innerHTML;
  alert(`Thank you for the purchace, come again, your total is R${total}`);
  document.getElementsByClassName("paying")[0].innerHTML = "0";
  let clear = "";
  let rec = document.getElementById("cartlist");
  rec.innerHTML = clear;
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

function openEditModal(id){
  console.log(id)
}