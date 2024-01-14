document.addEventListener("DOMContentLoaded", function () {
  let selectedRating = 0;

  const ratingButtons = document.querySelectorAll(".btn-circle");
  const submitButton = document.querySelector(".btn");
  const ratingSection = document.querySelector(".rating-wrapper");
  const thankYouSection = document.querySelector(".thank-you-wrapper");
  const authorSection = document.querySelector(".author");
  const authorSection1 = document.querySelector(".author1");
  const scoreSpan = document.querySelector(".thank-you-content .score span");

  console.log(
    ratingButtons,
    submitButton,
    ratingSection,
    thankYouSection,
    authorSection,
    scoreSpan
  ); // Debugging line

  ratingButtons.forEach((button) => {
    button.addEventListener("click", function () {
      selectedRating = this.value;
      console.log("Rating selected:", selectedRating); // Debugging line
    });
  });

  submitButton.addEventListener("click", function () {
    console.log("Submit button clicked, selected rating:", selectedRating); // Debugging line
    if (selectedRating !== 0) {
      scoreSpan.textContent = selectedRating + " out of 5";
      ratingSection.style.display = "none";
      thankYouSection.style.display = "block";
      authorSection.style.display = "none"; // Make author section visible
      authorSection1.style.display = "block";
    }
  });
});
