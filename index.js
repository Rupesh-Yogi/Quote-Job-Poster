
let secondsLeft = 30;

// For Quote Card

function fetchQuote() {
  fetch("https://dummyjson.com/quotes/random")
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(".quoteText").innerText = data.quote;
      document.querySelector(".quoteAuthor").innerText = data.author;
    });
}

fetchQuote();

// For refresh button

const refreshButton = document.querySelector(".refresh-btn");

refreshButton.addEventListener("click", () => {
  fetchQuote();
  document.querySelector("#countDown").textContent = secondsLeft;
});

// For auto refresh & Countdown


setInterval(() => {
  secondsLeft--;
  document.querySelector("#countDown").textContent = secondsLeft;

  if (secondsLeft == 0) {
    fetchQuote();
    secondsLeft = 30;
  }
}, 1000);
