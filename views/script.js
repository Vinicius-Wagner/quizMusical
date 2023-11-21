const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav-bar');

hamburger.addEventListener('click', function() {
    navBar.classList.toggle('active');
});

const popup = document.getElementById("popup");

function openPopUp(){
    popup.classList.add("open-popup")
}

function closePopUp(){
    popup.classList.remove("open-popup")
}

const popUpCerto = document.getElementById("popUpCerto");

function openPopUpCorreto(){
    popUpCerto.classList.add("open-popUpCorreto")
}

const popUpErrado = document.getElementById("popUpErrado")

function openPopUpErrado(){
    popUpErrado.classList.add("open-popUpErrado")
}