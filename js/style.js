let headLogin = document.getElementById("headLogin");
let headAdmin = document.getElementById("headAdmin");
let headGuest = document.getElementById("headGuest");
let headReg = document.getElementById("headReg");
let loginRoot = document.getElementById("loginRoot");
let menuRoot = document.getElementById("menuRoot");
let regRoot = document.getElementById("regRoot");

let headStyle = document.querySelectorAll(".title-h");
let areaStyle = document.querySelectorAll(".area");
let inputStyle = document.querySelectorAll(".input-style");
let btnArea = document.querySelectorAll(".button-area");
let btnStyle = document.querySelectorAll(".button");
let textArea = document.querySelectorAll(".text-area");
let box = document.querySelectorAll(".box");
let infoBox = document.querySelectorAll(".info-box");

let nameUser = username.value;

//Head Title Page
headLogin.textContent = "Ayo Login!";
headAdmin.textContent = "Selamat datang Admin";
headGuest.textContent = "Selamat datang User";
headReg.textContent = "Ayo daftar dulu!";

headAdmin.style.display = "none";
headGuest.style.display = "none";
loginRoot.style.display = "block";
menuRoot.style.display = "none";
regRoot.style.display = "none";

//Styling with JS
headStyle.forEach((headS) => {
  headS.style.textAlign = "center";
  headS.style.color = "White";
});

areaStyle.forEach((areaS) => {
  Object.assign(areaS.style, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  });
});

inputStyle.forEach((inputS) => {
  Object.assign(inputS.style, {
    width: "12rem",
    height: "1.1rem",
    margin: "5px",
    padding: "3px",
  });
});

btnArea.forEach((btnA) => {
  btnA.style.margin = "1rem";
});

btnStyle.forEach((btnS) => {
  Object.assign(btnS.style, {
    width: "5.7rem",
    padding: "3px 3px",
    margin: "0 5px",
  });
});

textArea.forEach((textA) => {
  Object.assign(textA.style, {
    width: "50%",
    paddingTop: "3rem",
    margin: "0 5px",
    fontSize: "0.8rem",
    fontWeight: "bold",
    color: "white",
  });
});

box.forEach((bx) => {
  bx.style.textAlign = "center";
});

infoBox.forEach((infoB) => {
  Object.assign(infoB.style, {
    display: "inline-block",
    textAlign: "left",
    border: "3px solid white",
    marginTop: "2rem",
    padding: "1rem",
    color: "white",
    fontWeight: "bold",
  });
});
