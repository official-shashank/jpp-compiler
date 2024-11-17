document.getElementById("registerForm")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;


  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const formData = { username, password };

  let users = localStorage.getItem("users");
  let userArr = users ? JSON.parse(users) : [];

  // Check for duplicate username
  if (userArr.some((user) => user.username === username)) {
    alert("Username already exists!");
    return;
  }

  userArr.push(formData);
  localStorage.setItem("users", JSON.stringify(userArr));

  alert("Registration successful!");
  window.location.href="./login.html"
});

document.getElementById("loginForm")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  let users = localStorage.getItem("users");
  if (!users) {
    alert("No registered users found!");
    return;
  }

  let userArr = JSON.parse(users);
  const user = userArr.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    alert("Login successful!");
    // Add further logic for logged-in users
  } else {
    alert("Invalid username or password!");
  }
});

// const userInfo = Json.parse(localStorage.getItem("users"));

// if(userInfo){

// }
function checkAuth() {
  const user = localStorage.getItem("users");
  if (user && (window.location.href.includes("/login.html") || window.location.href.includes("/register.html"))) {
    window.location.href = "./index.html";

  
 
  }
  if(user){
    const loginBtnLanding = document.getElementById("login-btn");
    document.getElementById("user-avtar").style.display="block"
    loginBtnLanding.style.display="none";
  }
}
checkAuth();

function signOut(){
    
    localStorage.removeItem("users");
    window.location.href="./index.html"
}

