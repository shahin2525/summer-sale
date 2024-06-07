document.getElementById("k-card-1").addEventListener("click", () => {
  const accessoriesPrice1 = getText("accessories-price-1");
});

const getText = (textId) => {
  const textField = document.getElementById(textId);
  const textFieldString = textField.innerText;
  const textFieldNumber = parseFloat(textFieldString);
  return textFieldNumber;
};
