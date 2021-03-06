    // =====ADDING A PRODUCT!!!=====

    function adds() {
      let form = document.getElementById("adding");
      const inputs = form.getElementsByTagName("input");
      const selects = form.getElementsByTagName('select')
    
      fetch("https://tabangduda.herokuapp.com/add-new-products/", {
        method: "POST",
        body: JSON.stringify({
          name: inputs[0].value,
          type: selects[0].value,
          quantity: inputs[1].value,
          price: inputs[2].value,
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
        location.reload()
      });
  
    }
  
    function  change() {
      var selectedValue = document.change("list").value;
      console.log(selectedValue);
  }
  // change();
  
              // =======DISPLAY TABLES!!!======
  function getPosts() {
    fetch(" https://tabangduda.herokuapp.com/show-products/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((pos) => creatBlogItem(pos));
    });
  }
  
  function creatBlogItem(pos) {
    const item =`
        <tr id="prod${pos.id}">
          <td> ${pos.id}</td>
          <td><input name="products" type="text" value=" ${pos.products}"></td>
          <td> <input name="type" type="text" value=" ${pos.type}"></td>
          <td><input name="quantity" type="text" value="  ${pos.quantity}"></td>
          <td> <input name="prices" type="text" value=" ${pos.prices}"></td>   
          <td><button onclick="deleteValues(${pos.id})">delete</button>
              <button type="button" onclick="editValues(${pos.id})" class="pay" id="pay" ">edit</button></td>
        </tr>
      `;
  
    let list = document.getElementById("records");
    console.log();
    list.innerHTML += item;
  }
  getPosts();
  
  
  // =====DISPLAY USERS======
  
  function getUsers() {
    fetch("https://tabangduda.herokuapp.com/show-records/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((position) => creatUserItem(position));
    });
  }
  
  function creatUserItem(position) {
    const user =`
        <tr id="prod${position.id}">
          <td> ${position.id}</td>
          <td><input name="user" type="text" value=" ${position.user}"></td>
          <td> <input name="role" type="text" value=" ${position.role}"></td>
          <td><input name="password" type="text" value="  ${position.password}"></td>
          <td><button onclick="deleteValue(${position.id})">delete</button>
              <button type="button" onclick="editValue(${position.id})" class="pay" id="pay" ">edit</button></td>
        </tr>
      `;
  
    let list = document.getElementById("user-records");
    console.log();
    list.innerHTML += user;
  }
  getUsers();
  
  
  
  // =======DELETE TABLES!!!======
  function deleteValues(id) {
    if (confirm("Are you sure to Delete?")) {
      fetch(`https://tabangduda.herokuapp.com/delete-products/${id}/`, {method: "DELETE"});
      console.log(id);
    } else {
      alert("Delete Cancelled");
  
      console.log("This was not saved to the Database");
    }
  }
  
  
  // =====UPDATE ITEMS=====
  function editValues(id) {
    if (confirm("are you sure?")) {
      let userItem = document.getElementById(`prod${id}`);
      let inputs = userItem.getElementsByTagName("input");
      console.log(userItem);
  
      let user = {
        name: inputs[0].value,
        type: inputs[1].value,
        quantity: inputs[2].value,
        price: inputs[3].value,
      };
  
    fetch(` https://tabangduda.herokuapp.com/edit-products/${id}/`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
  } else {
    alert("changes cancelled")
  }}
  
  // =====UPDATE USERS=====
  function editValue(id) {
    if (confirm("are you sure to update?")) {
      let userItem = document.getElementById(`prod${id}`);
      let inputs = userItem.getElementsByTagName("input");
      console.log(userItem);
  
      let user = {
        user: inputs[0].value,
        role: inputs[1].value,
        password: inputs[2].value,
      };
  
    fetch(` https://tabangduda.herokuapp.com/edit-users/${id}/`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
  } else {
    alert("changes cancelled")
  }
  }
  
  
  // =======DELETE USERS======
  
  function deleteValue(id) {
    if (confirm("Are you sure to Delete?")) {
      fetch(` https://tabangduda.herokuapp.com/delete-users/${id}/`, {method: "DELETE"});
      console.log(id);
    } else {
      alert("Delete Cancelled");
  
      console.log("This was not saved to the Database");
    }
  }
  // deleteValue();