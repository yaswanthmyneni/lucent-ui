const modal = document.getElementById("modal");
const modalBg = document.getElementById("modal-bg");
const displayModal = document.getElementById("display-modal");
const closeModal = document.getElementById("close-modal");

displayModal.addEventListener("click", () => {
  modalBg.style.display = "block";
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  modalBg.style.display = "none";
  document.body.style.overflow = "visible";
});