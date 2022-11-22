// document.getElementById("year").innerHTML = new Date().getFullYear()
const row = document.getElementById("row");
const newplace = document.getElementById("newplace");
const gam = document.getElementById("deskrip");
const pro1 = document.getElementById("pro1");
const jud = document.getElementById("jud");

function detail(nomor) {
  newplace.style.display = "block";
  row.style.display = "none";
  jud.textContent = "Deskripsi";

  if (nomor === 1) {
    pro1.style.display = "flex";
  }
}

const menu = document.querySelector(".hamham input");
const nav = document.querySelector("nav ul");

menu.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// const mess = `saya mau ${produk} dengan harga ${harga}`
// const wa = `https://wa.me/6282112786649?text=${mess}`
// open(wa, "blank")
