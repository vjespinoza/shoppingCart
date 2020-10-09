let displayMoney = document.getElementById("cartMoney");
let displayItems = document.getElementById("cartItems");

let itemList = document.getElementById("itemList");
let summaryItem = document.getElementById("summaryItem_01");

let summaryImage = document.getElementById("itemImage_01");
let summaryName = document.getElementById("item_Name_01");
let summaryModel = document.getElementById("itemModel_01");
let summaryQuantity = document.getElementById("detailQuantityDisplay_01");
let summaryPrice = document.getElementById("itemPriceAmount_01");

//Gets localStorage info from modal
let data = JSON.parse(localStorage.getItem("orderItem"));

window.addEventListener("load", () => {
    if (localStorage.length === 0 && data == null) {
        summaryItem.classList.add("hide");
        console.log("Condition 1");
    } else if (localStorage.length === 1 && data.length >= 1) {
        let dataValues = Object.values(data);
        for (i = 0; i < data.length; i++) {
            summaryImage.setAttribute("src", dataValues[i].modalItemImage);
            summaryName.innerText = dataValues[i].modalItemName;
            summaryModel.innerText = dataValues[i].modalItemModel;
            summaryQuantity.value = dataValues[i].modalItemQuantity;
            summaryPrice.innerText = dataValues[i].modalItemUnitPrice;
            summaryItem.classList.add("hide");
            let x = document.createElement("article");
            x.innerHTML = summaryItem.innerHTML;
            x.classList.add("summaryItem");
            itemList.append(x);
            console.log("fuck" + i);
            console.log(x);
        }

        console.log(data.length);
        console.log("Condition 2");
    }
});

window.addEventListener("storage", () => {
    location.reload();
});

window.addEventListener("unload", () => {
    localStorage.clear();
});
