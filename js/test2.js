let h = document.getElementById("theButton3");
let f = document.getElementById("demo");

//Gets data from locaStorage on page load
window.addEventListener("load", () => {
  f.innerHTML = `
      <p style="color: #fff">My father's name is: ${localStorage.getItem("person1_name")}</p>
      <p style="color: #fff">My father's last name is: ${localStorage.getItem(
        "person1_lastName"
      )} </p>
      <p style="color: #fff">My father's age is: ${localStorage.getItem("person1_age")} </p>
      <p style="color: #fff">My father's eye color is: ${localStorage.getItem(
        "person1_eyeColor"
      )} </p>
      <p style="color: #fff">My father's nationality is: ${localStorage.getItem(
        "person1_nationality"
      )}</p>
          `;

  let myElement = document.createElement("div");
  let myContent = (f.innerHTML = "<h1>This a test text</h1>");
  myElement.innerHTML = myContent;
  f.append(myElement);
  console.log(myElement);
  console.log(myContent);
});
