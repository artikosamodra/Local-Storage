let headLogin = document.getElementById("headLogin");
let headAdmin = document.getElementById("headAdmin");
let headGuest = document.getElementById("headGuest");
let loginRoot = document.getElementById("loginRoot");

let headStyle = document.querySelectorAll(".title-h");
let areaStyle = document.querySelectorAll(".area");
let inputStyle = document.querySelectorAll(".input-style");
let btnArea = document.querySelector(".button-area");
let btnStyle = document.querySelectorAll(".button");

//Head Title Page
headLogin.textContent = "Ayo Login!";
headAdmin.textContent = "Selamat datang Admin";
headGuest.textContent = "Selamat datang Guest";

headAdmin.style.display = "none";
headGuest.style.display = "none";
loginRoot.style.display = "block";
menuRoot.style.display = "none";


//Styling with JS
headStyle.forEach((headS) => {
  Object.assign(headS.style, {
    textAlign: "center",
    color: "white",
  });
});

areaStyle.forEach((areaS) => {
  Object.assign(areaS.style, {
    // backgroundColor: "green",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // padding: "0rem",
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

Object.assign(btnArea.style, {
  margin: "1rem",
});

btnStyle.forEach((btnS) => {
  Object.assign(btnS.style, {
    width: "5.7rem",
    padding: "3px 3px",
    margin: "0 5px",
  });
});
