// k-card-1
document.getElementById("k-card-1").addEventListener("click", () => {
  const accessoriesPrice1 = getText("accessories-price-1");
  const totalPrice = getText("total-price");

  const newPrice = accessoriesPrice1 + totalPrice;
  addList("K.Accessories-1");
  console.log(newPrice);
  fixedPurchaseButton(newPrice);
  fixedApplyButton(newPrice);

  setTextField("total-price", newPrice);
});
// k-card-2
document.getElementById("k-card-2").addEventListener("click", () => {
  const accessoriesPrice1 = getText("accessories-price-2");
  const totalPrice = getText("total-price");

  const newPrice = accessoriesPrice1 + totalPrice;

  addList("K.Accessories-2");
  console.log(newPrice);
  // fixedPurchaseButton(newPrice);
  fixedApplyButton(newPrice);
  setTextField("total-price", newPrice);
});

const getText = (textId) => {
  const textField = document.getElementById(textId);
  const textFieldString = textField.innerText;
  const textFieldNumber = parseFloat(textFieldString);
  return textFieldNumber;
};
// add list
const addList = (listProductName) => {
  const listContainer = document.getElementById("product-list");
  const count = listContainer.childElementCount;
  const p = document.createElement("p");
  p.classList.add("my-2");

  p.innerText = `${count + 1}. ${listProductName}`;
  listContainer.appendChild(p);
};
// setText
const setTextField = (textId, total) => {
  const textField = document.getElementById(textId);

  textField.innerText = total;
  return textField;
};
// fixedPurchaseButtonDisabled
// const fixedPurchaseButton = (totalPrice) => {
//   console.log(totalPrice);
//   if (totalPrice > 0) {
//     buttonEnable("purchase-btn");
//     // buttonDisable("purchase-btn");
//   } else {
//     // buttonEnable("purchase-btn");
//     buttonDisable("purchase-btn");
//   }
// };
const fixedPurchaseButton = (totalPrice) => {
  if (totalPrice > 0) {
    buttonEnable("purchase-btn");
  } else {
    buttonDisable("purchase-btn");
  }
};

// check totalPriceLabel
const fixedApplyButton = (totalPrice) => {
  if (totalPrice > 200) {
    buttonEnable("apply-btn");
  } else {
    buttonDisable("apply-btn");
  }
};

// disable button
const buttonDisable = (buttonId) => {
  const button = document.getElementById(buttonId);

  button.disabled = true;
  button.classList.add("bg-gray-400", "cursor-not-allowed");
  button.classList.remove("btn-secondary");
};
// enable button
const buttonEnable = (buttonId) => {
  const button = document.getElementById(buttonId);

  button.disabled = false;
  button.classList.add("btn-secondary");
  button.classList.remove("bg-gray-400", "cursor-not-allowed");
};
