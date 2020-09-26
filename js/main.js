//First test
//Store information inside an object

let itemImage = document.querySelectorAll(".itemImage");
let itemName = document.querySelectorAll(".itemName");
let itemModel = document.querySelectorAll(".itemModel");
let itemPrice = document.querySelectorAll(".itemPrice");
let addToCartBtn = document.querySelectorAll(".addToCartBtn");
let money = document.getElementById("cartMoney");

function getButtonId() {
  addToCartBtn.forEach((addCartBtn) => {
    addCartBtn.addEventListener("click", (e) => {
      var btnId = e.target.getAttribute("id");
      btnId = btnId.slice(btnId.length - 2) - 1;
      var x = itemPrice.item(btnId).id.slice(length - 2) - 1;
      var z = parseFloat(itemPrice.item(btnId).innerHTML.slice(1));
      if (btnId == x) {
        money.innerHTML = `$${z}`;
      }
    });
  });
}

getButtonId();
