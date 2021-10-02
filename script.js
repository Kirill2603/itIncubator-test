let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

//3,4,5,10 Кейс
searchBtn.addEventListener("click", () => {
  if (searchInput.value === `google`) {
    setTimeout(()=>{
      alert(`Yandex круче. Но это не точно`);
    },3000) 
    
  } else alert(searchInput.value + ' ' + objArr[0].name);
});

// 5 Кейс
let objArr = [
  { name: "Ivan", age: "23" },
  { name: "Alex", age: "24" },
  { name: "Vasya", age: "22" },
];

// 6 Кейс
let superSum = (a,b) =>  a+b

alert(superSum(1,2))

// 7 Кейс
let array = [0,-5,8,-19,100,20,3,-30,101,5]

let findMax = (arr) => {
  let arrMax = arr[0]
  let arrMin = arr[0]
  for (i=0;i<arr.length;i++) {
    if (arr[i] > arrMax){ arrMax=arr[i]}
    else if (arr[i]< arrMin) { arrMin = arr[i]}
  }
  console.log(`Максимальное значение :${arrMax}`)
  console.log(`Минимальное значение :${arrMin}`)
}

findMax(array)

// 8 Кейс
let a = 10, b = 20;
[a, b] = [b, a]

console.log(a)
console.log(b)

//9: та же функция что и в 7 кейсе
arr2 = [1,4,5,-6,623,22223,-234235,-213234,355]
findMax(arr2)

// p.s. 
// Надеюсь правильно понял все кейсы тестово задания)

