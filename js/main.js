//First test
//Store information inside an object

const shopItems = {
  itemImage: document.querySelectorAll(".itemImage"),
  itemName: document.querySelectorAll(".itemName"),
  itemModel: document.querySelectorAll(".itemModel"),
  itemPrice: document.querySelectorAll(".itemPrice"),
  addToCartBtn: document.querySelectorAll(".addToCartBtn"),
  money: document.getElementById("cartMoney"),
  getIdPairs: function () {
    let a = shopItems.itemPrice.forEach((price) => {
      var i = price.getAttribute("id");
      i.slice(i.length - 2);
    });

    let b = shopItems.addToCartBtn.forEach((btn) => {
      var i = btn.getAttribute("id");
      i.slice(i.length - 2);
    });

    // let c = [a * 2] - b;
    // let c = 2;

    if (a == b) {
      return (shopItems.money.innerHTML = `${c}`);
    }
  },
};

shopItems.addToCartBtn.forEach((addCartBtn) => {
  addCartBtn.addEventListener("click", () => {
    shopItems.getIdPairs();
  });
});

// console.log(shopItems.);
// console.log(itemName);
// console.log(itemModel);
// console.log(itemPrice);
// console.log(addToCartBtn);
