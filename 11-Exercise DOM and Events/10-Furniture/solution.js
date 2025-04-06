function solve() {
  let tableBody = document.getElementsByTagName("tbody")[0];
  let userInput = document.getElementsByTagName("textarea")[0];
  let resultTextArea = document.getElementsByTagName("textarea")[1];
  let generateButton = document.getElementsByTagName("button")[0];
  let buyButton = document.getElementsByTagName("button")[1];

  generateButton.addEventListener('click', generateRow)
  buyButton.addEventListener('click', buyItems)

  function generateRow(){
    const items = JSON.parse(userInput.value);

    for (const item of items) {

      let tableRow = document.createElement("tr")

      // add td for the image
      let imageTableData = document.createElement("td")
      let image = document.createElement("img");
      image.src = item.img;
      imageTableData.appendChild(image);
      tableRow.appendChild(imageTableData);

      // add td for name
      let nameTd = document.createElement("td");
      let namep = document.createElement("p");
      namep.textContent = item.name;
      nameTd.appendChild(namep);
      tableRow.appendChild(nameTd)

      // add td for price
      let priceTd = document.createElement("td");
      let priceP = document.createElement("p");
      priceP.textContent = item.price;
      priceTd.appendChild(priceP);
      tableRow.appendChild(priceTd)

      // add td for decoration factor
      let decorationTd = document.createElement("td");
      let decorationP = document.createElement("p");
      decorationP.textContent = item.decFactor;
      decorationTd.appendChild(decorationP);
      tableRow.appendChild(decorationTd)

      // add td for checkbox
      let checkboxInputTd = document.createElement("td");
      let checkBoxInput = document.createElement("input");
      checkBoxInput.type = "checkbox";
      checkboxInputTd.appendChild(checkBoxInput);
      tableRow.appendChild(checkboxInputTd);

      tableBody.appendChild(tableRow);
    }

  }

  function buyItems(){
    let furniture = [];
    let totalPrice = 0;

    let tableRows = document.getElementsByTagName("tr")

    for (let i = 1; i<tableRows.length; i++) {
      let checkmark = tableRows[i].children[4].children[0].checked;

      if(checkmark){
        let name = tableRows[i].children[1].children[0].textContent;
        furniture.push(name);
        let price = tableRows[i+1].children[2].children[0].value;
      }
      let totalPrice += price;
    }
    let result = `Bought furniture: ${furniture.join(", ")}`
    resultTextArea.value = result;

    
  }
}