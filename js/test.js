let a = document.getElementById("theButton");

a.addEventListener("click", () => {
  let myData = "numberList";
  let myArray = [1, 2, 3, 4, 5];

  localStorage.setItem(myData, myArray);
  console.log(localStorage);
  //   console.log(localStorage.getItem("myData"));
  //   console.log(localStorage.getItem("myArray"));
  console.log(localStorage.getItem("numberList[0]"));
});
