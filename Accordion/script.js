const downArrow = document.querySelectorAll(".arrow");
const text = document.querySelectorAll(".text");
const infoDiv = document.querySelectorAll(".info-box");

downArrow.forEach(function (arrow) {
  arrow.addEventListener("click", function () {
    // removeActive();
    // removeBold();
    const infoBox = arrow.nextElementSibling;
    infoBox.classList.toggle("hidden");
    const heading = arrow.previousElementSibling;
    heading.classList.toggle("bold");
    arrow.classList.toggle("rotate");
  });
});

// const removeActive = function () {
//   infoDiv.forEach(function (info) {
//     info.classList.add("hidden");
//   });
// };

// const removeBold = function () {
//   text.forEach(function (txt) {
//     txt.classList.remove("bold");
//   });
// };
