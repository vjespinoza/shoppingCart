//First test
//Store information inside an object

const shopItems = {
  itemImage: document.querySelectorAll(".itemImage"),
  itemName: document.querySelectorAll(".itemName"),
  itemModel: document.querySelectorAll(".itemModel"),
  itemPrice: document.querySelectorAll(".itemPrice"),
  addToCartBtn: document.querySelectorAll(".addToCartBtn"),
  money: document.getElementById("cartMoney"),
};

function getButtonId() {
  shopItems.addToCartBtn.forEach((addCartBtn) => {
    addCartBtn.addEventListener("click", (e) => {
      //Gets addToCartBtn button ID's last two characters
      var btnId = e.target.getAttribute("id");
      btnId = btnId.slice(btnId.length - 2);
      // console.log(btnId);
      return btnId;
    });
  });
}

function getPriceId() {
  shopItems.itemPrice.forEach((itemPriceTag) => {
    itemPriceTag.addEventListener("click", (e) => {
      var priceId = e.target.getAttribute("id");
      priceId = priceId.slice(priceId.length - 2);
      // console.log(priceId);
      return priceId;
    });
  });
}

function testTest() {
  let a = getButtonId();
  let b = getPriceId();
  console.log(a + b);
}

testTest();

// console.log(shopItems.);
// console.log(itemName);
// console.log(itemModel);
// console.log(itemPrice);
// console.log(addToCartBtn);

//Gets last 2 digits of the elemt's ID
// shopItems.itemPrice.forEach((price) => {
//   var i = price.getAttribute("id");
//   console.log(i.slice(i.length - 2));
// });
