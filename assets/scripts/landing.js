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

let users;
fetch("https://tabangduda.herokuapp.com/show-records/")
.then((response)=> response.json())
.then((data) => {
  users=data
  console.log(users)
})

// =====LOG-IN======
function login() {
  let loginForm = document.getElementById("log");
  let inputs = loginForm.getElementsByTagName("input");

  let uname = inputs[0].value;
  let pword = inputs[1].value;

  let log = users.filter((user) => {
    return user.user == uname && user.password == pword;
    });
    
    if (log.length > 0) {
    alert("You have Successfully Logged in, " + uname);
    // localStorage.setItem("user", JSON.stringify(log[0]));
    window.location.href = "./pay.html";
  } else {
  alert("Please enter a valid username and password");
  }}
;
function userLogin() {
  const form = document.getElementById("sign-in-form");
  const inputs = form.getElementsByTagName("input");
  
  let uname = inputs[0].value;
  let pword = inputs[1].value;
  
  let log = users.filter((user) => {
  return user.username == uname && user.password == pword;
  });
  
  if (log.length > 0) {
  alert("You have Successfully Logged in, " + uname);
  
  localStorage.setItem("user", JSON.stringify(log[0]));
  
  window.location.href = "./main.html";
  } else {
  alert("Please enter a valid username and password");
  }}