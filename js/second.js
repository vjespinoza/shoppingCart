let displayMoney = document.getElementById("cartMoney");
let displayItems = document.getElementById("cartItems");
let summaryImage = document.getElementById("itemImage_01");
let summaryName = document.getElementById("item_Name_01");
let summaryModel = document.getElementById("itemModel_01");
let summaryQuantity = document.getElementById("detailQuantityDisplay_01");
let summaryPrice = document.getElementById("itemPriceAmount_01");

//
window.addEventListener("load", () => {
  //Get localStorage for displayMoney and displayItems
  let a = parseFloat(localStorage.getItem("displayMoney")).toFixed(2);
  let b = parseFloat(localStorage.getItem("displayItems"));

  displayMoney.innerText = `$${a}`;
  displayItems.innerText = `(Items: ${b})`;

  //Get localStorage from modal
  let itemImage = localStorage.getItem("modalItemImage");
  let itemName = localStorage.getItem("modalItemName");
  let itemModel = localStorage.getItem("modalItemModel");
  let itemQuantity = localStorage.getItem("modalItemQuantity");
  let itemPrice = localStorage.getItem("modalItemUnitPrice");

  //Print localStorage info into summaryItem element
  summaryImage.setAttribute("src", itemImage);
  summaryName.innerText = itemName;
  summaryModel.innerText = itemModel;
  summaryQuantity.value = itemQuantity;
  summaryPrice.innerText = itemPrice;
  console.log(summaryImage);
});
