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
  //Gets info for displayMoney and displayItems from localStorage.
  // let a = parseFloat(localStorage.getItem("displayMoney")).toFixed(2);
  // let b = parseFloat(localStorage.getItem("displayItems"));

  // displayMoney.innerText = `$${a}`;
  // displayItems.innerText = `(Items: ${b})`;

  //Gets localStorage info from modal
  let itemImage = localStorage.getItem("modalItemImage");
  let itemName = localStorage.getItem("modalItemName");
  let itemModel = localStorage.getItem("modalItemModel");
  let itemQuantity = localStorage.getItem("modalItemQuantity");
  let itemPrice = localStorage.getItem("modalItemUnitPrice");

  //Prints localStorage info to summaryItem element.
  summaryImage.setAttribute("src", itemImage);
  summaryName.innerText = itemName;
  summaryModel.innerText = itemModel;
  summaryQuantity.value = itemQuantity;
  summaryPrice.innerText = itemPrice;
});

//Creates new summaryItem when there's a chnage on localStorage.
window.addEventListener("storage", (e) => {
  let trigger = localStorage.getItem("trigger");
  console.log(e.type);
  let f = e.type;
  // console.log(trigger);

  if (f == "storage") {
    let a = document.createElement("article");
    itemList.appendChild(a);
    console.log(a);
  }
});
