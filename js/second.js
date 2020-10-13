let displayMoney = document.getElementById("cartMoney");
let displayItems = document.getElementById("cartItems");

let itemList = document.getElementById("itemList");
let summaryItem = document.getElementById("dummyItem");

let summaryImage = document.getElementById("itemImage");
let summaryName = document.getElementById("itemName");
let summaryModel = document.getElementById("itemModel");
let summaryQuantity = document.getElementById("detailQuantityDisplay");
let summaryPrice = document.getElementById("itemPriceAmount");
let summaryDetailBtnRemove = document.getElementById("detailBtnRem");
let summaryDetailBtnAdd = document.getElementById("detailBtnAdd");
let summaryItemRemove = document.getElementById("itemRemove");

let mainMessageQuantity = document.getElementById("itemQty");
let orderSubTotal = document.getElementById("orderSubTotalAmount");
let orderDiscount = document.getElementById("orderDiscountAmount");
let orderDiscountOptin = document.getElementById("discountOptIn");
let orderTotal = document.getElementById("orderTotalAmount");

//Buttons
let orderSummayBtn = document.getElementById("payBtn");
let checkoutBtn = document.getElementById("checkoutBtn")


//Gets localStorage info from modal
let data = JSON.parse(localStorage.getItem("orderItem"));
let mainQtyList = [];
let orderSubTotalList = [];

window.addEventListener("load", () => {

    //Updates item list
    if (localStorage.length === 0 && data == null) {
        summaryItem.innerHTML = `<h2>Your shopping cart is empty</h2>\n
                                <button class="button" id="backStoreBtn">Back to store</button>`
        summaryItem.style.display = "block"
        document.getElementById("backStoreBtn").addEventListener("click", ()=>{
            window.open("/index.html","_self")
        })
        console.log("Condition 1");
    } else if (localStorage.length >= 1 && data.length >= 1) {
        let dataValues = Object.values(data);
        for (i = 0; i < data.length; i++) {
            
            //Sets incremental ID's to summaryItem elements.
            summaryImage.setAttribute("id", "itemImage"+[i+1]);
            summaryName.setAttribute("id", "itemName"+[i+1]);
            summaryModel.setAttribute("id", "itemModel"+[i+1]);
            summaryQuantity.setAttribute("id", "detailQuantityDisplay"+[i+1]);
            summaryPrice.setAttribute("id", "itemPriceAmount"+[i+1]);
            summaryDetailBtnRemove.setAttribute("id", "detailBtnRem"+[i+1]);
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
            x.classList.add("grab")
            x.setAttribute("id", "summaryItem"+[i+1])
            itemList.prepend(x);
            
            //Updates item quantity on message section
            mainQtyList.push(data[i].modalItemQuantity);
            mainMessageQuantity.innerHTML = mainQtyList.reduce(function(a, b){return parseInt(a)+parseInt(b)});
            
           //Updates Order Summary info - Sub Total
           orderSubTotalList.push(data[i].modalItemTotal);
           orderSubTotal.innerHTML = orderSubTotalList.reduce(function(a,b){return (parseFloat(a)+parseFloat(b)).toFixed(2)})

           
        }
        //Updates Order Summary info - Discount Opt in & Order Total
        orderDiscountOptin.addEventListener("change", (e) => {
            
            if (e.target.checked) {
                orderDiscount.innerHTML = ((orderSubTotal.innerHTML * 0.1).toFixed(2));
                orderTotal.innerHTML = (orderSubTotal.innerHTML - orderDiscount.innerHTML).toFixed(2)
                console.log("Checked")
            } else {
                orderDiscount.innerHTML = 0
                orderTotal.innerHTML = orderSubTotal.innerHTML
                console.log("Unchecked")
            }
        })
        
        //Establishes default value of Order Total on page load
        orderTotal.innerHTML = orderSubTotal.innerHTML
        
        //Edits item quantity on summaryItem element
        document.querySelectorAll("button.cartDetailBtn").forEach((qtyEdit) =>  {
        
            let a = 1
            
            qtyEdit.addEventListener("click", (e) => {
                let btnId = parseInt(e.target.getAttribute("id").slice(12))
                let dispId = document.getElementById("detailQuantityDisplay"+[btnId])
                let dispQty = parseInt(mainQtyList[btnId - 1])
                let btnType = e.target.getAttribute("class").slice(20)
                
                if (btnType == "BtnAdd") {
                    let b = (dispQty += a)
                    a++
                    // dispId.setAttribute("value", [dispId.value = b])                 
                    dispId.value = b                 
                    
                } else{
                    dispQty = dispId.value
                    dispId.value -= a                 
                    // dispId.setAttribute("value", [dispId.value -= a])                 
                    if (dispId.value == 0) {
                        dispId.value = 1
                    }
                }    
                console.log(`dispId.value: ${dispId.value}`)         
                console.log(`dispQty: ${dispQty}`)         
            })
        });
        
        
    }
});


orderSummayBtn.addEventListener("click", () => {
    window.open("/checkout.html", "_self")
})

checkoutBtn.addEventListener("click", () => {
    window.open("/checkout.html", "_self")
})

window.addEventListener("storage", () => {
    location.reload();
});


