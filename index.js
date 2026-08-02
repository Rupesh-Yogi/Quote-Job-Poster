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

const searchLoading = document.querySelector(".searchLoading");

let debounceTimer;

searchInput.addEventListener("input", () => {
  const inputValue = searchInput.value;
  searchLoading.style.display = "flex";

  clearTimeout(debounceTimer);

  if (inputValue.trim() == "") {
    countriesContainer.innerHTML = "";
    searchLoading.style.display = "none";
    return;
  }

  debounceTimer = setTimeout(() => {
    fetch(`https://countries.dev/name/${inputValue}`)
      .then((res) => res.json())
      .then((data) => {
        searchLoading.style.display = "none";

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

// For Job Poster Card

const postButton = document.querySelector("#post-task");
const taskTitleInput = document.querySelector(".task-title input");
const textArea = document.querySelector(".body-description textarea");
const emptyState = document.querySelector(".noJObState");

postButton.addEventListener("click", () => {
  const textAreaValue = textArea.value;
  const titleInputValue = taskTitleInput.value;

  const titleErrorMessage = document.querySelector("#title-element");
  const descriptionErrorMessage = document.querySelector("#description-element");

  if (titleInputValue == "") {
    titleErrorMessage.textContent = "Enter the title";
  } else {
    titleErrorMessage.textContent = "";
  }

  if (textAreaValue == "") {
    descriptionErrorMessage.textContent = "Enter the text for teh description";
  } else {
    descriptionErrorMessage.textContent = "";
  }

  if(textAreaValue != "" && titleInputValue != ""){

    emptyState.style.display = "none";
        
    const jobPostArea = document.querySelector(".postedJobsList");
    
    const jobListWrapper = document.createElement("div");
    jobListWrapper.classList.add("jobListsWrapper");
    
    const titleElement = document.createElement("h3");
  titleElement.textContent = titleInputValue;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = textAreaValue;
  
  jobListWrapper.appendChild(titleElement);
  jobListWrapper.appendChild(descriptionElement);
  
  jobPostArea.appendChild(jobListWrapper);
}
});

// ***************************************************************

// const postButton = document.querySelector("#post-task");
// const taskTitleInput = document.querySelector(".task-title input");
// const textArea = document.querySelector(".body-description textarea");
// const emptyState = document.querySelector(".noJObState");

// const inputText = document.querySelectorAll(".inputText");

// postButton.addEventListener("click", () => {
  //   emptyState.style.display = "none";
  
  //   const textAreaValue = textArea.value;
  //   const titleInputValue = taskTitleInput.value;
  
  //   inputText.forEach((element) => {
//     const errorMesssage = element.getAttribute("errorMessage");
//     const errorId = element.getAttribute("errorId");
//     const errorElement = document.querySelector(`#${errorId}`);

//     const inputText = document.querySelectorAll(".inputText");

//     if (element.value == "") {
//       errorElement.textContent = errorMesssage;
//     } else {
//       errorElement.textContent = "";

//       const jobPostArea = document.querySelector(".postedJobsList");

//       const jobListWrapper = document.createElement("div");
//       jobListWrapper.classList.add("jobListsWrapper");

//       const titleElement = document.createElement("h3");
//       titleElement.textContent = titleInputValue;

//       const descriptionElement = document.createElement("p");
//       descriptionElement.textContent = textAreaValue;

//       jobListWrapper.appendChild(titleElement);
//       jobListWrapper.appendChild(descriptionElement);

//       jobPostArea.appendChild(jobListWrapper);
//     }
//   });
// });
