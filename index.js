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
  secondsLeft = 30;
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

// For live Search Card

const searchInput = document.querySelector(".search-input input");
const countriesContainer = document.querySelector(".countries");

let debounceTimer;

searchInput.addEventListener("input", () => {
  const inputValue = searchInput.value;

  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    fetch(`https://countries.dev/name/${inputValue}`)
      .then((res) => res.json())
      .then((data) => {
        countriesContainer.innerHTML = "";
        data.forEach((element) => {
          const containerForResult = document.createElement("div");
          containerForResult.classList.add("containerForResult");

          const img = document.createElement("img");
          img.src = element.flags.png;
          img.alt = "Flag";

          const name = document.createElement("p");
          name.textContent = element.name;

          containerForResult.appendChild(img);
          containerForResult.appendChild(name);

          countriesContainer.appendChild(containerForResult);
        });
      });
  }, 800);
});


// For Search spinner 

const searchSpin = document.querySelector(".searchLoading");

