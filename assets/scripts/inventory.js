    // =====ADDING A PRODUCT=====

function adds() {
    let form = document.getElementById("adding");
    const inputs = form.getElementsByTagName("input");
  
    fetch("http://127.0.0.1:5000/add-new-products/", {
      method: "POST",
      body: JSON.stringify({
        name: inputs[0].value,
        type: inputs[1].value,
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
change();


        // =====DROPDOWN=====
function change(category) {
    let categ = "abcdefghijklmnopqrstuvwxyz"
        document.getElementById(category).style.display = 'block';
    for (i = 1; i < category.length; i++) {
        document.getElementById(categ.substring(0, i)).style.display = 'none'
    }
    for (i = category.length + 1; i < 26; i++) {
        document.getElementById(categ.substring(0, i)).style.display = 'none'
    }
}


var listt = document.getElementById("list");
var dropp = listt.getElementsByClassName("drop");

for (var i = 0; i < dropp.length; i++) {
  dropp[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}