let displayMoney = document.getElementById("cartMoney");
let displayItems = document.getElementById("cartItems");

let itemList = document.getElementById("itemList");
let summaryItem = document.getElementById("summaryItem_01");

let summaryImage = document.getElementById("itemImage_01");
let summaryName = document.getElementById("item_Name_01");
let summaryModel = document.getElementById("itemModel_01");
let summaryQuantity = document.getElementById("detailQuantityDisplay_01");
let summaryPrice = document.getElementById("itemPriceAmount_01");

//Prints localStorage info to summaryItem element.
function printStorageInfo() {
  //Gets localStorage info from modal
  let data = JSON.parse(localStorage.getItem("orderItem"));
  //   let dataItems = Object.values(data);

  console.log(data);
  console.log(data[0]);
  console.log(data[1]);

  //   console.log(data);
  //   console.log(dataArray);
  //   console.log(typeof data);
  //   console.log(typeof dataArray);

  //     for (i = 0; i < dataArray.length; i++) {
  //       console.log(data[i]);
  //     }
  //   console.log(dataArray);
  //   console.log(typeof dataArray);
  //   console.log(data[0]);
  //   console.log(data[1]);

  //   let dataArray = Object.values(data);
  //   console.log(dataArray);

  //   let itemImage = data[0];
  //   let itemName = data[1];
  //   let itemModel = data[2];
  //   let itemQuantity = data[3];
  //   let itemPrice = data[4];

  //   summaryImage.setAttribute("src", itemImage);
  //   summaryName.innerText = itemName;
  //   summaryModel.innerText = itemModel;
  //   summaryQuantity.value = itemQuantity;
  //   summaryPrice.innerText = itemPrice;
}

window.addEventListener("load", () => {
  aaahhh();
});

function aaahhh() {
  window.addEventListener("storage", (e) => {
    let a = e.oldValue;
    //   a[2].slice(-8, -1);
    //   console.log(a);
    //   console.log(a[2].slice(-8, -1));

    let b = e.newValue;
    //   b[2].slice(-8, -1);
    //   console.log(b);
    //   console.log(b[2].slice(-8, -1));

    if (a == null) {
      printStorageInfo();
      console.log("waka waka");
    } else if (a != null && a != b) {
      let x = summaryItem.cloneNode(true);
      itemList.append(x);
      printStorageInfo();
      console.log("suanfonson");
    }
  });
}

//Gets localStorage info on page load and feeds summaryItem fields.
// window.addEventListener("load", () => {
// });

// Creates new summaryItem when there's a chnage on localStorage.
// window.addEventListener("storage", () => {
//   let a = summaryItem.cloneNode(true);
//   itemList.append(a);
//   printStorageInfo();
// });
