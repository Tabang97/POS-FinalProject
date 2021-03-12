var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000);
}


// =====LOG-IN======
function login() {
  let loginForm = document.getElementById("log");
  let inputs = loginForm.getElementsByTagName("input");

  let user = inputs[0].value;
  let password = inputs[1].value;

  let users;
  fetch("https://dashboard.heroku.com/apps/tabangduda/")
  .then((response) => response.json())
  .then((json) =>{
    console.log(json);
    users = json;
    console.log(user, password, users);

    let logged = users.filter((userProfile) => {
      return userProfile.user == user && userProfile.password == password;
    });
    console.log(logged);
    if (logged.length >= 1){
      window.location.href = `./pay.html`;
    }
  })
}