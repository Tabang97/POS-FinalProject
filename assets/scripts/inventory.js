    // =====ADDING A PRODUCT=====

function adds() {
    let form = document.getElementById("adding");
    const inputs = form.getElementsByTagName("input");
  
    fetch("http://127.0.0.1:5000/add-new-products/", {
      method: "POST",
      body: JSON.stringify({
        name: inputs[0].value,
        type: select[1].value,
        quantity: inputs[2].value,
        price: inputs[3].value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      alert("Item added succesfully");
      document.getElementById("adding").reset();
      form.reset();
    });
  }

  function  change() {
    var selectedValue = document.change("list").value;
    console.log(selectedValue);
}
// change();

            // =======DISPLAY TABLES======
function getPosts() {
  fetch("http://127.0.0.1:5000/show-products/")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    json.forEach((pos) => creatBlogItem(pos));
  });
}

function creatBlogItem(pos) {
  const item =`
      <td> ${pos.id}</td>
      <td> ${pos.products}</td>
      <td> ${pos.type}</td>
      <td> ${pos.quantity}</td>
      <td> ${pos.prices}</td>   
      <td><button onclick="deleteValues(${pos.id})">delete</button>
          <button>edit</button></td>
    `;

  let list = document.getElementById("records");
  console.log();
  list.innerHTML += item;
}
getPosts();



function deleteValues(id) {
  if (confirm("Are you sure to Delete?")) {
    fetch(`http://127.0.0.1:5000/delete-products/${id}/`, {method: "DELETE"});
    console.log(id);
  } else {
    alert("Delete Cancelled");

    console.log("This was not saved to the Database");
  }
}