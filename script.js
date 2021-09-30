console.log("hello");

let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  alert(searchInput.value);
});
