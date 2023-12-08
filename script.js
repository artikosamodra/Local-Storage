let username = document.getElementById("username");
let password = document.getElementById("password");

let usernameReg = document.getElementById("usernameReg");
let firstNameReg = document.getElementById("firstNameReg");
let lastNameReg = document.getElementById("lastNameReg");
let emailReg = document.getElementById("emailReg");
let passwordReg = document.getElementById("passwordReg");
let rePasswordReg = document.getElementById("rePasswordReg");

function onLogin() {
  console.log("klik berhasil");
  console.log(username.value);
  console.log(password.value);
  localStorage.setItem("username", username.value);

  //temporary account
  if (username.value == "admin" && password.value == "123456") {
    alert("login sebagai admin");
    localStorage.setItem("role", "admin");

    // Style Setting : Admin
    loginRoot.style.display = "none";
    menuRoot.style.display = "block";
    headAdmin.style.display = "block";
  } else if (
    username.value === usernameReg.value &&
    password.value === passwordReg.value
  ) {
    alert("login sebagai guest");
    localStorage.setItem("role", "guest");

    // Style Setting : Guest
    loginRoot.style.display = "none";
    menuRoot.style.display = "block";
    headGuest.style.display = "block";
  } else if (username.value == "" || password.value == "") {
    alert("username atau password belum terisi");
  } else {
    alert("account tidak ditemukan");
  }
}

function onLogout() {
  localStorage.clear();
  location.reload();
}

function onSignUp() {
  regRoot.style.display = "block";
  loginRoot.style.display = "none";
  menuRoot.style.display = "none";
}

function onReg() {
  usernameReg.value;
  firstNameReg.value;
  lastNameReg.value;
  emailReg.value;
  passwordReg.value;
  rePasswordReg.value;

  if (
    !usernameReg.value ||
    !firstNameReg.value ||
    !lastNameReg.value ||
    !emailReg.value ||
    !passwordReg.value ||
    !rePasswordReg.value
  ) {
    alert("isi yang kosong");
  } else if (passwordReg.value !== rePasswordReg.value) {
    alert("Kata sandi tidak cocok!");
  } else {
    alert("Selamat anda berhasil mendaftar, Silahkan login");
    localStorage.setItem("username", usernameReg.value);
    localStorage.setItem("firstname", firstNameReg.value);
    localStorage.setItem("lastname", lastNameReg.value);
    localStorage.setItem("email", emailReg.value);
    localStorage.setItem("password", passwordReg.value);
    location.reload();
  }
}

//localStorage get = jika localStorage mengandung X, maka.... (seperti tidak logout meskipun di refresh browser);
if (localStorage.getItem("username")) {
  loginRoot.style.display = "none";
  menuRoot.style.display = "block";
  if (localStorage.getItem("role") == "admin") {
    headAdmin.style.display = "block";
    headGuest.style.display = "none";
  } else if (localStorage.getItem("role") == usernameReg) {
    headAdmin.style.display = "none";
    headGuest.style.display = "block";
  } else {
    loginRoot.style.display = "block";
    menuRoot.style.display = "none";
  }
}
