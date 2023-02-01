const ratings = document.querySelectorAll(".rating_form input");
const rating_window = document.querySelector(".rating_window");
const rating_final = document.querySelector(".rating_final");
const rating_selection = document.querySelector(".rating_selection");
const submit_button = document.querySelector(".submit");
let rate;

const select_rating = (e) => {
  const element = e.target.value;
  rate = element
};

const submit_page = () => {
  rating_selection.innerHTML = rate;
  rating_window.style.display = "none";
  rating_final.style.display = "grid";
};

for (let rating of ratings) {
    rating.addEventListener("click", select_rating)
};

submit_button.addEventListener("click", submit_page);

// or use FormData()