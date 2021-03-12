
// =====REGISTERATION=====
function register() {
    let form = document.getElementById("create");
    const inputs = form.getElementsByTagName("input");
  
    fetch(" https://tabangduda.herokuapp.com/add-new-record/", {
      method: "POST",
      body: JSON.stringify({
        user: inputs[0].value,
        role: inputs[1].value,
        password: inputs[2].value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((response) => response.json())
    .then((json) => {
      alert("account created succesfully");
      console.log(json);
      form.reset();
    });
  }