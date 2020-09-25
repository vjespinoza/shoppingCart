//First test
//Store information inside an object

let itemImage = document.querySelectorAll(".itemImage");
let itemName = document.querySelectorAll(".itemName");
let itemModel = document.querySelectorAll(".itemModel");
let itemPrice = document.querySelectorAll(".itemPrice");
let addToCartBtn = document.querySelectorAll(".addToCartBtn");
let money = document.getElementById("cartMoney");

addToCartBtn.forEach((addCartBtn) => {
  addCartBtn.addEventListener("click", () => {
    itemPrice.forEach((price) => {
      money.innerHTML = `fucking fuck ${price.innerHTML}`;
      console.log(price.innerHTML);
    });
    this.price;
  });
});

// console.log(itemImage);
// console.log(itemName);
// console.log(itemModel);
// console.log(itemPrice);
// console.log(addToCartBtn);
