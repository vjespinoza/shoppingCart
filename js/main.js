//Second test
//Store information in global variables

//Showcase elements
let itemImage = document.querySelectorAll(".itemImage");
let itemName = document.querySelectorAll(".itemName");
let itemModel = document.querySelectorAll(".itemModel");
let itemPrice = document.querySelectorAll(".itemPrice");
let addToCartBtn = document.querySelectorAll(".addToCartBtn");
//Cart display elements
let displayMoney = document.getElementById("cartMoney");
let displayItems = document.getElementById("cartItems");
//Modal elements
let displayModalTotal = document.getElementById("cartTotal");
let displayModalQty = document.getElementById("modalQuantityDisplay");
let displayModalName = document.getElementById("itemNameModal");
let displayModalModel = document.getElementById("itemModelModal");
let displayModalImage = document.getElementById("itemImageModal");
let modalBtnAdd = document.getElementById("modalBtnAdd");
let modalBtnRemove = document.getElementById("modalBtnRemove");
let modalCofirmBtn = document.getElementById("modalCofirmBtn");

//Click event listener for .addToCartBtn
addToCartBtn.forEach((addCartBtn) => {
  addCartBtn.addEventListener("click", (e) => {
    function updatePriceDisplay() {
      //Gets addToCartBtn ID as string and slice last two characters
      var btnId = e.target.getAttribute("id");
      btnId = btnId.slice(btnId.length - 2) - 1;
      //btnId defines the item position for itemPrice, then gets ID
      //as string and slice last two characters
      var x = itemPrice.item(btnId).id.slice(length - 2) - 1;
      //Gets innerHTML content ox x, and slices the first character ($).
      var z = parseFloat(itemPrice.item(btnId).innerHTML.slice(1));
      if (btnId == x) {
        displayMoney.innerHTML = `$${z}`;
      }
    }

    function updateModal() {
      //Gets addToCartBtn ID as string and slice last two characters
      var btnId = e.target.getAttribute("id");
      btnId = btnId.slice(btnId.length - 2) - 1;
      //btnId defines the item position for itemPrice, then gets ID
      //as string and slice last two characters
      var x = itemPrice.item(btnId).id.slice(length - 2) - 1;
      //Gets innerHTML content ox x, and slices the first character ($).
      var z = parseFloat(itemPrice.item(btnId).innerHTML.slice(1));
      var img = itemImage.item(btnId).getAttribute("src");

      var name = itemName.item(btnId).innerHTML;
      var model = itemModel.item(btnId).innerHTML;

      if (btnId == x) {
        displayModalTotal.innerHTML = `$${z}`;
        displayModalQty.value = 1;
        displayModalName.innerHTML = name.toUpperCase();
        displayModalModel.innerHTML = model.toUpperCase();
        displayModalImage.innerHTML = `<img src="${img}" />`;
      }
    }

    updatePriceDisplay();
    updateModal();
  });
});

modalBtnAdd.addEventListener("click", () => {
  var a = parseInt(displayModalQty.value);
  var b = (displayModalQty.value = ++a);
  // var c = parseFloat(displayModalTotal);
  var c = parseFloat(displayModalTotal.innerHTML.slice(1));
  var total = a * c;

  console.log(b);
  console.log(c);
  // console.log(`Result is ${total}`);

  displayModalTotal.innerHTML = `$${total.toFixed(2)}`;
});

modalBtnRemove.addEventListener("click", () => {
  alert("Remove");
});

modalCofirmBtn.addEventListener("click", () => {
  alert("Confirm");
});
