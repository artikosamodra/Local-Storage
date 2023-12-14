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
  // error notif
  const errorElement = document.getElementById("errorMessages");
  let errorText = " ";
  errorElement.textContent = errorText;

  // value input regis
  const usernameReg = document.getElementById("usernameReg").value;
  let firstNameReg = document.getElementById("firstNameReg").value;
  let lastNameReg = document.getElementById("lastNameReg").value;
  const emailReg = document.getElementById("emailReg").value;
  const passwordReg = document.getElementById("passwordReg").value;
  const rePasswordReg = document.getElementById("rePasswordReg").value;

  // validasi variable
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // validasi input
  if (
    !usernameReg ||
    !firstNameReg ||
    !lastNameReg ||
    !emailReg ||
    !passwordReg ||
    !rePasswordReg
  ) {
    errorText = "Semua harus di isi.";
  } else if (usernameReg.length < 4 || usernameReg.length > 10) {
    errorText = "Username harus terdiri dari 4-10 karakter.";
  } else if (localStorage.getItem(usernameReg)) {
    errorText = "Username sudah terdaftar";
  } else if (!emailRegex.test(emailReg)) {
    errorText = "Format email salah.";
  } else if (passwordReg.length < 8) {
    errorText = "Password harus terdiri dari minimal 8 karakter.";
  } else if (passwordReg !== rePasswordReg) {
    errorText = "Konfirmasi password tidak sesuai.";
  } else {
    alert("Selamat anda berhasil mendaftar, Silahkan login");
    localStorage.setItem(
      usernameReg,
      JSON.stringify({
        username: usernameReg,
        firstname: firstNameReg,
        lastname: lastNameReg,
        email: emailReg,
        password: passwordReg,
      })
    );
    onBack();
    return;
    // tambahkan navigasi atau tindakan sesuai kebutuhan setelah registrasi sukses
  }

  // menampilkan pesan error
  errorElement.textContent = errorText;
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
