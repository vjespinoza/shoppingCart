let displayMoney = document.getElementById("cartMoney");
let displayItems = document.getElementById("cartItems");

let itemList = document.getElementById("itemList");
let summaryItem = document.getElementById("summaryItem");

let summaryImage = document.getElementById("itemImage");
let summaryName = document.getElementById("itemName");
let summaryModel = document.getElementById("itemModel");
let summaryQuantity = document.getElementById("detailQuantityDisplay");
let summaryPrice = document.getElementById("itemPriceAmount");
let summaryDetailBtnRemove = document.getElementById("detailBtnRemove");
let summaryDetailBtnAdd = document.getElementById("detailBtnAdd");
let summaryItemRemove = document.getElementById("itemRemove");


//Gets localStorage info from modal
let data = JSON.parse(localStorage.getItem("orderItem"));

window.addEventListener("load", () => {
    if (localStorage.length === 0 && data == null) {
        // summaryItem.classList.add("hide");
        summaryItem.innerHTML = `<h2>Your shopping cart is empty</h2>\n
                                <button class="button" id="backStoreBtn">Back to store</button>`
        summaryItem.style.display = "block"
        document.getElementById("backStoreBtn").addEventListener("click", ()=>{
            window.open("/index.html","_self")
        })
        console.log("Condition 1");
    } else if (localStorage.length === 1 && data.length >= 1) {
        let dataValues = Object.values(data);
        for (i = 0; i < data.length; i++) {
            
            //Sets incremental ID's to summaryItem elements.
            summaryImage.setAttribute("id", "itemImage"+[i+1]);
            summaryName.setAttribute("id", "itemName"+[i+1]);
            summaryModel.setAttribute("id", "itemModel"+[i+1]);
            summaryQuantity.setAttribute("id", "detailQuantityDisplay"+[i+1]);
            summaryPrice.setAttribute("id", "itemPriceAmount"+[i+1]);
            summaryDetailBtnRemove.setAttribute("id", "detailBtnRemove"+[i+1]);
            summaryDetailBtnAdd.setAttribute("id", "detailBtnAdd"+[i+1]);
            summaryItemRemove.setAttribute("id", "itemRemove"+[i+1]);
            
            //Writes storage values to sumaryItem elements.
            summaryImage.setAttribute("src", dataValues[i].modalItemImage);
            summaryName.innerText = dataValues[i].modalItemName;
            summaryModel.innerText = dataValues[i].modalItemModel;
            summaryQuantity.setAttribute("value", dataValues[i].modalItemQuantity)
            summaryPrice.innerText = dataValues[i].modalItemUnitPrice;
                       
            //Hides the original summaryItem
            summaryItem.classList.add("hide");

            //Creates article for each new sumaryItem
            let x = document.createElement("article");
            x.innerHTML = summaryItem.innerHTML;
            x.classList.add("summaryItem");
            x.setAttribute("id", "summaryItem"+[i+1])
            itemList.append(x);
            
        }

        console.log(data.length);
        console.log("Condition 2");
    }
});

window.addEventListener("storage", () => {
    location.reload();
});


