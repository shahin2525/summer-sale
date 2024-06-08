// k-card-1
document.getElementById("k-card-1").addEventListener("click", () => {
  const accessoriesPrice1 = getText("accessories-price-1");
  const totalPrice = getText("total-price");

  const newPrice = accessoriesPrice1 + totalPrice;
  if (newPrice > 200) {
    getDiscount(newPrice);
  }

  addList("K.Accessories-1");

  fixedPurchaseButton(newPrice);
  fixedApplyButton(newPrice);

  setTextField("total-price", newPrice);
});
// k-card-2
document.getElementById("k-card-2").addEventListener("click", () => {
  const accessoriesPrice1 = getText("accessories-price-2");
  const totalPrice = getText("total-price");

  const newPrice = accessoriesPrice1 + totalPrice;
  if (newPrice > 200) {
    getDiscount(newPrice);
  }
  addList("K.Accessories-2");

  fixedPurchaseButton(newPrice);
  fixedApplyButton(newPrice);
  setTextField("total-price", newPrice);
});
// k-card-3
document.getElementById("k-card-3").addEventListener("click", () => {
  const accessoriesPrice1 = getText("home-cooker-price");
  const totalPrice = getText("total-price");

  const newPrice = accessoriesPrice1 + totalPrice;
  if (newPrice > 200) {
    getDiscount(newPrice);
  }
  addList("Home-Cooker");

  fixedPurchaseButton(newPrice);
  fixedApplyButton(newPrice);
  setTextField("total-price", newPrice);
});

// f card-2

document.getElementById("f-card-1").addEventListener("click", () => {
  const accessoriesPrice1 = getText("relax-chair-price");
  const totalPrice = getText("total-price");

  const newPrice = accessoriesPrice1 + totalPrice;
  if (newPrice > 200) {
    getDiscount(newPrice);
  }
  addList("Relax-Chair");

  fixedPurchaseButton(newPrice);
  fixedApplyButton(newPrice);
  setTextField("total-price", newPrice);
});

document.getElementById("f-card-2").addEventListener("click", () => {
  const accessoriesPrice1 = getText("play-chair-price");
  const totalPrice = getText("total-price");

  const newPrice = accessoriesPrice1 + totalPrice;
  if (newPrice > 200) {
    getDiscount(newPrice);
  }
  addList("Play-Chair");

  fixedPurchaseButton(newPrice);
  fixedApplyButton(newPrice);
  setTextField("total-price", newPrice);
});
// f-card-3
document.getElementById("f-card-3").addEventListener("click", () => {
  const accessoriesPrice1 = getText("flexible-sofa-price");
  const totalPrice = getText("total-price");

  const newPrice = accessoriesPrice1 + totalPrice;
  if (newPrice > 200) {
    getDiscount(newPrice);
  }
  addList("Flexible-Sofa");

  fixedPurchaseButton(newPrice);
  fixedApplyButton(newPrice);
  setTextField("total-price", newPrice);
});
// calculate discount
const getDiscount = (newPrice) => {
  document.getElementById("apply-btn").addEventListener("click", () => {
    const applyFieldValue = document.getElementById("coupon-input");

    const totalPrice = newPrice;
    const discountTotalPrice = (totalPrice * 20) / 100;
    const total = newPrice - discountTotalPrice;
    setTextField("discount", discountTotalPrice);
    setTextField("total", total);
  });
};

// get text
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
// purchase button
const fixedPurchaseButton = (totalPrice) => {
  if (totalPrice > 0) {
    buttonEnable("purchase-btn");
  } else {
    buttonDisable("purchase-btn");
  }
};

// apply button
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
// modal go home button function
const resetFunction = () => {
  // reset field
  setTextField("total-price", 0);
  setTextField("discount", 0);
  setTextField("total", 0);
  // clear list container
  const listContainer = document.getElementById("product-list");
  listContainer.innerHTML = "";
  // disabled button
  buttonDisable("purchase-btn");
  buttonDisable("apply-btn");

  // close modal
  document.getElementById("my_modal_5").close();
};
