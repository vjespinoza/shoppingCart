let displayMoney = document.getElementById("cartMoney");
let displayItems = document.getElementById("cartItems");

let itemList = document.getElementById("itemList");
let summaryItem = document.getElementById("summaryItem_01");

let summaryImage = document.getElementById("itemImage_01");
let summaryName = document.getElementById("item_Name_01");
let summaryModel = document.getElementById("itemModel_01");
let summaryQuantity = document.getElementById("detailQuantityDisplay_01");
let summaryPrice = document.getElementById("itemPriceAmount_01");

//Gets localStorage info on page load and feeds summaryItem fields.
window.addEventListener("load", () => {
  //Gets localStorage info from modal
  let data = JSON.parse(localStorage.getItem("modalItem"));
  let dataArray = Object.values(data);

  let itemImage = dataArray[0];
  let itemName = dataArray[1];
  let itemModel = dataArray[2];
  let itemQuantity = dataArray[3];
  let itemPrice = dataArray[4];

  //Prints localStorage info to summaryItem element.
  function printInfo() {
    summaryImage.setAttribute("src", itemImage);
    summaryName.innerText = itemName;
    summaryModel.innerText = itemModel;
    summaryQuantity.value = itemQuantity;
    summaryPrice.innerText = itemPrice;
  }

  printInfo();
});

//Creates new summaryItem when there's a chnage on localStorage.
window.addEventListener("storage", () => {
  let a = summaryItem.cloneNode(true);
  itemList.append(a);
  printInfo();

  console.log(a);
});
