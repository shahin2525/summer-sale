document.getElementById("k-card-1").addEventListener("click", () => {
  const accessoriesPrice1 = getText("accessories-price-1");
  const totalPrice = getText("total-price");
  const newPrice = accessoriesPrice1 + totalPrice + 5;

  setTextField("total-price", newPrice);
});

const getText = (textId) => {
  const textField = document.getElementById(textId);
  const textFieldString = textField.innerText;
  const textFieldNumber = parseFloat(textFieldString);
  return textFieldNumber;
};

const setTextField = (textId, total) => {
  const textField = document.getElementById(textId);

  textField.innerText = total;
  return textField;
};
