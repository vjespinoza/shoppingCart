let a = document.getElementById("theButton");
let b = document.getElementById("theButton2");

// Constructor function for Person objects
function Person(first, last, age, eye, nationality) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = nationality;
}

// Create 2 Person objects
var myFather = new Person("John", "Doe", 50, "blue", "Venezuelan");
var myMother = new Person("Sally", "Rally", 48, "green", "French");

// Display nationality
document.getElementById("demo").innerHTML =
  "My father is " + myFather.nationality + ". My mother is " + myMother.nationality;

//Parse to localStorage
a.addEventListener("click", () => {
  localStorage.setItem("person1_name", myFather.firstName);
  localStorage.setItem("person1_lastName", myFather.lastName);
  localStorage.setItem("person1_age", myFather.age);
  localStorage.setItem("person1_eyeColor", myFather.eyeColor);
  localStorage.setItem("person1_nationality", myFather.nationality);
  window.open("/test2.html");
  console.log(localStorage);
});

//Clear localStorage
b.addEventListener("click", () => {
  localStorage.clear();
  console.log(localStorage);
});
