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
let displayMoneyTotal = [];
let displayItemsTotal = [];

//Modal elements
let modal = document.getElementById("modal");
let displayModalPrice = document.getElementById("cartPrice");
let displayModalTotal = document.getElementById("cartTotal");
let displayModalQty = document.getElementById("modalQuantityDisplay");
let displayModalName = document.getElementById("itemNameModal");
let displayModalModel = document.getElementById("itemModelModal");
let displayModalImage = document.getElementById("itemImageModal");
let modalBtnAdd = document.getElementById("modalBtnAdd");
let modalBtnRemove = document.getElementById("modalBtnRemove");
let modalCofirmBtn = document.getElementById("modalCofirmBtn");
let modalCancelBtn = document.getElementById("modalCancelBtn");

//Click event listener for .addToCartBtn
addToCartBtn.forEach((addCartBtn) => {
  addCartBtn.addEventListener("click", (e) => {
    //PENDING!!! Click event to prevent pointer events when modal is active

    function updateModal() {
      modal.style.display = "block";

      //Gets addToCartBtn ID as string and slice last two characters
      var btnId = e.target.getAttribute("id");
      btnId = btnId.slice(btnId.length - 2) - 1;
      //btnId defines the item position for itemPrice, then gets ID
      //as string and slice last two characters
      var x = itemPrice.item(btnId).id.slice(length - 2) - 1;
      //Gets innerHTML content ox x, and slices the first character ($).
      var z = parseFloat(itemPrice.item(btnId).innerText);

      var img = itemImage.item(btnId).getAttribute("src");

      var name = itemName.item(btnId).innerText;
      var model = itemModel.item(btnId).innerText;

      if (btnId == x) {
        displayModalTotal.innerText = `${z}`;
        displayModalPrice.innerText = `${z}`;
        displayModalQty.value = 1;
        displayModalName.innerText = name.toUpperCase();
        displayModalModel.innerText = model.toUpperCase();
        displayModalImage.innerHTML = `<img src="${img}" />`;
      }
    }

    // updatePriceDisplay();
    updateModal();
  });
});

modalBtnAdd.addEventListener("click", () => {
  var a = parseInt(displayModalQty.value);
  displayModalQty.value = ++a;
  var b = parseFloat(displayModalPrice.innerText);
  var total = a * b;

  displayModalTotal.innerText = `${total.toFixed(2)}`;
});

modalBtnRemove.addEventListener("click", () => {
  var a = parseInt(displayModalQty.value);
  displayModalQty.value = --a;
  var b = parseFloat(displayModalPrice.innerText);
  var total = a * b;

  if (total <= 0) {
    displayModalQty.value = 1;
  } else {
    displayModalTotal.innerText = `${total.toFixed(2)}`;
  }
});

modalCofirmBtn.addEventListener("click", () => {
  modal.style.display = "none";

  let x = parseFloat(displayModalTotal.innerText);
  let y = x.toLocaleString("es-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  //Stores displayModalTotal values into an array | let displayMoneyTotal = [];
  displayMoneyTotal.push(y);

  //Sums all values of the array using reduce()
  //and displays the result on displayMoney.innerText
  displayMoney.innerText = `$${displayMoneyTotal.reduce(addTotals)}`;

  //Function required to proerly use reduce()
  function addTotals(total, newTotal) {
    return (parseFloat(total) + parseFloat(newTotal)).toFixed(2);
  }

  //Same as above for the number of items on the cart.
  displayItemsTotal.push(displayModalQty.value);

  displayItems.innerText = `(Items: ${displayItemsTotal.reduce(itemsTotal)})`;

  function itemsTotal(item, newItem) {
    return parseInt(item) + parseInt(newItem);
  }
});

modalCancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

//CHECKOUT+++++++++++++++++++++++

let checkoutBtn = document.getElementById("checkoutBtn");

checkoutBtn.addEventListener("click", () => {
  console.log("Fucking fuck!");
  window.open("/checkout.html");
});

console.log(checkoutBtn);
