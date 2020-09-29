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
    // function updatePriceDisplay() {
    //   //Gets addToCartBtn ID as string and slice last two characters
    //   var btnId = e.target.getAttribute("id");
    //   btnId = btnId.slice(btnId.length - 2) - 1;
    //   //btnId defines the item position for itemPrice, then gets ID
    //   //as string and slice last two characters
    //   var x = itemPrice.item(btnId).id.slice(length - 2) - 1;
    //   //Gets innerHTML content of x, and slices the first character ($).
    //   var z = parseFloat(itemPrice.item(btnId).innerHTML.slice(1));
    //   if (btnId == x) {
    //     displayMoney.innerHTML = `$${z}`;
    //   }
    // }

    //Click event to prevent pointer events when modal is active

    function updateModal() {
      modal.style.display = "block";

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
        displayModalPrice.innerHTML = `$${z}`;
        displayModalQty.value = 1;
        displayModalName.innerHTML = name.toUpperCase();
        displayModalModel.innerHTML = model.toUpperCase();
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
  var b = displayModalPrice.innerHTML.slice(1);
  var total = a * b;

  displayModalTotal.innerHTML = `$${total.toFixed(2)}`;
});

modalBtnRemove.addEventListener("click", () => {
  var a = parseInt(displayModalQty.value);
  displayModalQty.value = --a;
  var b = displayModalPrice.innerHTML.slice(1);
  var total = a * b;

  if (total <= 0) {
    displayModalQty.value = 1;
  } else {
    displayModalTotal.innerHTML = `$${total.toFixed(2)}`;
  }
});

modalCofirmBtn.addEventListener("click", () => {
  modal.style.display = "none";

  //Stores displayModalTotal values into an array | let displayMoneyTotal = [];
  displayMoneyTotal.push(displayModalTotal.innerHTML.slice(1));

  //Sums all values of the array using reduce()
  //and displays the result on displayMoney.innerHTML
  displayMoney.innerHTML = displayMoneyTotal.reduce(addTotals);

  //Function required to proerly use reduce()
  function addTotals(total, newTotal) {
    return (parseFloat(total) + parseFloat(newTotal)).toFixed(2);
  }

  //Same as above for the number of items on the cart
  displayItemsTotal.push(displayModalQty.value);

  displayItems.innerHTML = `(Items: ${displayItemsTotal.reduce(itemsTotal)})`;

  function itemsTotal(item, newItem) {
    return parseInt(item) + parseInt(newItem);
  }
});

modalCancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
