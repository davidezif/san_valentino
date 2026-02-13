const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// /change the postion of no button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;

  const computedStyle = getComputedStyle(yesBtn);
  const currentPaddingLeft = parseFloat(computedStyle.paddingLeft) || 10;
  const currentPaddingRight = parseFloat(computedStyle.paddingRight) || 10;
  const currentFontSize = parseFloat(computedStyle.fontSize) || 16;

  yesBtn.style.paddingLeft = `${currentPaddingLeft * 2}px`;
  yesBtn.style.paddingRight = `${currentPaddingRight * 2}px`;
  yesBtn.style.fontSize = `${currentFontSize * 2}px`;
});

// yes button functionality

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});