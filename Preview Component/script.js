const popup = document.querySelector(".popup");
const share = document.querySelector(".arrow");

share.addEventListener("mouseover", function () {
  popup.classList.remove("hidden");
});

share.addEventListener("mouseout", function () {
  popup.classList.add("hidden");
});
