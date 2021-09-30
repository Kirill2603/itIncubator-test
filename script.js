console.log("hello");

let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  if (searchInput.value == "google") {
    alert("Yandex круче. Но это не точно");
  } else alert(searchInput.value);
});
