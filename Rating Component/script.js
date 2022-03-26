const ratings = document.querySelectorAll("li");
const wrapper = document.querySelector(".wrapper");
const thankYou = document.querySelector(".thank-you");

const submitBtn = document.querySelector(".submit");

ratings.forEach(function (rating) {
  rating.addEventListener("click", function () {
    removeActive();
    rating.classList.add("active");
  });
});

submitBtn.addEventListener("click", function () {
  const rating = document.querySelector(".active").textContent;
  wrapper.classList.add("hidden");
  thankYou.classList.remove("hidden");

  const ratingResult = document.querySelector(".rating-result");
  ratingResult.textContent = `You selected ${rating} out of  5`;
});
const removeActive = function () {
  ratings.forEach((rating) => rating.classList.remove("active"));
};
