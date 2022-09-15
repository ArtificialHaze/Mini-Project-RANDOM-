// VARIABLES

const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

// EVENT LISTENERS

const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  number.innerHTML = randomNumber;
};

btn.addEventListener("click", generateRandomNumber);
