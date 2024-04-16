function setBackgroundColor(elementId) {
   const setColor = document.getElementById(elementId);
   setColor.classList.add("bg-pryColor");
}

function stringInt(elementId) {
   const parParson = document.getElementById(elementId);
   const ticketPriceString = parParson.innerText;
   const ticketPrice = parseInt(ticketPriceString);
   return ticketPrice;
}
function inputValue(elementId) {
   const parParson = document.getElementById(elementId);
   const ticketPriceString = parParson.value;
   const ticketPrice = parseInt(ticketPriceString);
   return ticketPrice;
}
function displayElement(elementId, value) {
   const set = document.getElementById(elementId, value);
   set.innerText = value;
}

function applyCoupon() {
   const inputField = document.getElementById("apply-field");
   const inputValue = inputField.value;
   // const ticketPrice = stringInt("par-parson");
   if (inputValue === "NEW15") {
      const grandTotal = stringInt("grand-total");
      console.log(grandTotal);
      const allTotalAndGrandTotal = grandTotal * ((100 - 15) / 100);
      console.log(allTotalAndGrandTotal);
      displayElement("grand-total", allTotalAndGrandTotal);
   } else if (inputValue === "Couple 20") {
      const grandTotal = stringInt("grand-total");
      console.log(grandTotal);
      const allTotalAndGrandTotal = grandTotal * ((100 - 20) / 100);
      console.log(allTotalAndGrandTotal);
      displayElement("grand-total", allTotalAndGrandTotal);
   }
}


