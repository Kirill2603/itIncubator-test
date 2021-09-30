console.log("hello");

let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  if (searchInput.value == `google + ${objArr[0]}`) {
    alert(`Yandex круче. Но это не точно`);
  } else alert(searchInput.value);
});

let objArr = [
  { name: "Ivan", age: "23" },
  { name: "Alex", age: "24" },
  { name: "Vasya", age: "22" },
];
