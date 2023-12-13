let username = document.getElementById("username");
let password = document.getElementById("password");
let userInfo = document.getElementById("infoUser");

function setUserInfo(userAccount) {
  if (userAccount) {
    let fullName = userAccount.firstname + " " + userAccount.lastname;
    let email = userAccount.email;
    userInfo.innerHTML = `Name  : ${fullName} <br> Email: ${email}`;
  } else {
    userInfo.innerHTML = "Data admin tidak tersedia";
  }
}

function onLogin() {
  console.log("klik berhasil");
  console.log(username.value);
  console.log(password.value);
  localStorage.setItem("username", username.value);
  let userAccount = JSON.parse(localStorage.getItem(username.value));

  if (username.value == "admin" && password.value == "123456") {
    alert("login sebagai admin");
    localStorage.setItem("role", "admin");
    loginRoot.style.display = "none";
    menuRoot.style.display = "block";
    headAdmin.style.display = "block";
    setUserInfo(userAccount);
  } else if (userAccount && password.value === userAccount.password) {
    alert("login sebagai user");
    localStorage.setItem("role", "user");
    loginRoot.style.display = "none";
    menuRoot.style.display = "block";
    headGuest.style.display = "block";
    setUserInfo(userAccount);
    userInfo.innerHTML = `Name  : ${fullName} <br> Email: ${email}`;
  } else if (username.value == "" || password.value == "") {
    alert("username atau password belum terisi");
  } else {
    alert("account tidak ditemukan");
  }
}

function onRepos() {
  let linkRepos = "https://github.com/artikosamodra/Local-Storage";
  window.open(linkRepos, "_blank");
}

function onLogout() {
  localStorage.removeItem("username");
  localStorage.removeItem("role");
  location.reload();
}

function onSignUp() {
  regRoot.style.display = "block";
  loginRoot.style.display = "none";
  menuRoot.style.display = "none";
}

function onReg() {
  let usernameReg = document.getElementById("usernameReg");
  let firstNameReg = document.getElementById("firstNameReg");
  let lastNameReg = document.getElementById("lastNameReg");
  let emailReg = document.getElementById("emailReg");
  let passwordReg = document.getElementById("passwordReg");
  let rePasswordReg = document.getElementById("rePasswordReg");

  if (
    !usernameReg.value ||
    !firstNameReg.value ||
    !lastNameReg.value ||
    !emailReg.value ||
    !passwordReg.value ||
    !rePasswordReg.value
  ) {
    alert("isi yang kosong");
  } else if (localStorage.getItem(usernameReg.value)) {
    alert("username telah digunakan");
  } else if (passwordReg.value !== rePasswordReg.value) {
    alert("Kata sandi tidak cocok!");
  } else {
    alert("Selamat anda berhasil mendaftar, Silahkan login");
    localStorage.setItem(
      usernameReg.value,
      JSON.stringify({
        username: usernameReg.value,
        firstname: firstNameReg.value,
        lastname: lastNameReg.value,
        email: emailReg.value,
        password: passwordReg.value,
      })
    );
    onBack();
  }
}

function onBack() {
  location.reload();
}

function onClear() {
  let userRole = localStorage.getItem("role");

  if (userRole == "admin") {
    localStorage.clear();
    alert("Semua data user berhasil dihapus");
  } else {
    alert("Maaf akses gagal, anda bukan admin");
  }
}

//localStorage get = jika localStorage mengandung X, maka.... (seperti tidak logout meskipun di refresh browser);
if (localStorage.getItem("username")) {
  loginRoot.style.display = "none";
  menuRoot.style.display = "block";

  if (localStorage.getItem("role") == "admin") {
    headAdmin.style.display = "block";
    headGuest.style.display = "none";
  } else if (localStorage.getItem("role") == "user") {
    headAdmin.style.display = "none";
    headGuest.style.display = "block";
  } else {
    loginRoot.style.display = "block";
    menuRoot.style.display = "none";
  }
} else {
}

function loadUserInfo() {
  let storedUsername = localStorage.getItem("username");
  if (storedUsername) {
    let userAccount = JSON.parse(localStorage.getItem(storedUsername));
    setUserInfo(userAccount);
  }
}

loadUserInfo();
