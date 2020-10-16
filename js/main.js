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
            //Gets innerHTML content of x, and slices the first character ($).
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
        console.log(modal.getAttribute("style"))
        
        // if (modal.hasAttribute("style")) {
        if (modal.getAttribute("style") === "display: block;") {
            addClasses()
        } 
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

let itemList = [];

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

    //Set localStorge for modal info

    let modalItem = {
        modalItemImage: displayModalImage.innerHTML.slice(10, -2),
        modalItemName: displayModalName.innerText,
        modalItemModel: displayModalModel.innerText,
        modalItemQuantity: displayModalQty.value,
        modalItemUnitPrice: displayModalPrice.innerText,
        modalItemTotal: displayModalTotal.innerText,
    };

    itemList.push(modalItem);
    localStorage.setItem("orderItem", JSON.stringify(itemList));

    removeClasses()
    //PENDING!!! Validates if an item has already been added to the cart.
});

modalCancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
    removeClasses()
});

checkoutBtn.addEventListener("click", () => {
    window.open("checkout.html", "_self")
})

function removeClasses() {
    let x = document.querySelector("main.showcase")
    let y = document.querySelector("body")
    x.classList.remove("preventClick")
    x.classList.remove("noSelect")
    y.classList.remove("preventScroll")
    console.log("Modal is NOT active")
}

function addClasses() {
    let x = document.querySelector("main.showcase")
    let y = document.querySelector("body")
    x.classList.add("preventClick")
    x.classList.add("noSelect")
    y.classList.add("preventScroll")
    console.log("Modal is active")
}

//PROVISIONAL FUNCTION
function x() {
    localStorage.clear();
    console.log(localStorage);
    location.reload();
}




