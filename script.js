let username = document.getElementById("username");
let password = document.getElementById("password");

function onLogin() {
  console.log("klik berhasil");
  console.log(username.value);
  console.log(password.value);
  localStorage.setItem("username", username.value);

  //temporary account
  if (username.value == "admin" && password.value == "123456") {
    alert("login sebagai admin");
    localStorage.setItem("account", "admin");

    // Style Setting : Admin
    loginRoot.style.display = "none";
    menuRoot.style.display = "block";
    headAdmin.style.display = "block";
    headGuest.style.display = "none";
  } else if (username.value == "guest" && password.value == "guest") {
    alert("login sebagai guest");
    localStorage.setItem("account", "guest");

    // Style Setting : Guest
    loginRoot.style.display = "none";
    menuRoot.style.display = "block";
    headAdmin.style.display = "none";
    headGuest.style.display = "block";
  } else if (username.value == "" || password.value == "") {
    alert("username atau password belum terisi");
  } else {
    alert("account tidak ditemukan");
  }
}

function onLogout() {}
