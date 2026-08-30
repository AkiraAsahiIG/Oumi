// ================================
// PAGE 1 → PAGE 2
// ================================

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const letterButton = document.getElementById("letterButton");
const nextButton = document.getElementById("nextButton");


// When the person presses the letter
letterButton.addEventListener("click", () => {

  page1.classList.remove("active");

  setTimeout(() => {
    page1.style.display = "none";
    page2.style.display = "flex";

    setTimeout(() => {
      page2.classList.add("active");
    }, 50);

  }, 500);

});


// ================================
// NEXT BUTTON
// ================================

// Hide Next button at first
nextButton.style.display = "none";

// Make the button appear after 10 seconds
setTimeout(() => {
  nextButton.style.display = "block";
  nextButton.classList.add("show-button");
}, 10000);


// ================================
// PAGE 2 → PAGE 3
// ================================

nextButton.addEventListener("click", () => {

  page2.classList.remove("active");

  setTimeout(() => {

    page2.style.display = "none";
    page3.style.display = "flex";

    setTimeout(() => {
      page3.classList.add("active");
    }, 50);

  }, 500);

});


// ================================
// BACKGROUND MUSIC
// ================================

const backgroundMusic = document.getElementById("backgroundMusic");

letterButton.addEventListener("click", () => {

  backgroundMusic.volume = 0.35;

  backgroundMusic.play().catch(() => {
    console.log("Music could not autoplay.");
  });

});