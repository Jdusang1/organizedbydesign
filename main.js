var modal = document.getElementById("homeModal");
var modalBtn = document.getElementById("modalBtn");
var closeBtn = document.getElementsByClassName("closeBtn")[0];

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick)

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = "none"
    }
};


var estateModal = document.getElementById("estateModal");
var estateModalBtn = document.getElementById("modalBtn1");
var estateCloseBtn = document.getElementsByClassName("closeBtn1")[0];

modalBtn1.addEventListener("click", openModal1);
closeBtn1.addEventListener("click", closeModal1);
window.addEventListener("click", outsideClick1)

function openModal1() {
    modal.style.display = "block";
}

function closeModal1() {
    modal.style.display = "none";
}

function outsideClick1(e) {
    if (e.target == modal) {
        modal.style.display = "none"
    }
}