const seatAll = document.getElementsByClassName("seat");
let count = 0;
for (const seat of seatAll) {
   seat.addEventListener("click", function () {
      count = count + 1;

      if (count <= 4) {
         displayElement("seat", count);

         seat.classList.add("bg-pryColor");

         const seatName = seat.innerText;
         const seatElement = document.getElementById("ticket-element");

         const tr = document.createElement("tr");
         tr.innerHTML = `
                <td >${seatName}</td>
                <td>Economoy</td>
                <td id="par-parson">550</td>
                `;
         seatElement.appendChild(tr);

         const ticketPrice = stringInt("par-parson");
         const totalPrice = stringInt("Total-price");
         const allTotal = totalPrice + ticketPrice;
         displayElement("Total-price", allTotal);
         // console.log(allTotal);

         const busSeat = stringInt("bus-seat");
         const totalBusSeat = busSeat - 1;
         displayElement("bus-seat", totalBusSeat);

         if (count === 4) {
            const applyBtn = document.getElementById("apply-btn");
            applyBtn.removeAttribute("disabled");
         }

         const grandTotal = stringInt("grand-total");
         const allTotalAndGrandTotal = ticketPrice + grandTotal;
         displayElement("grand-total", allTotalAndGrandTotal);
         

         const nextBtn = document.getElementById("next-btn");
         const phone = document.getElementById('phone-num').value;
         // console.log(phone);
         // console.log(nextBtn,seat);
         if(seat && phone ){
            nextBtn.removeAttribute("disabled");
         }

         return;
      } 
      else {
         alert();
         return;
      }

      //  const parTicket = document.getElementById();
      //  const ticketPrice = parTicket.innerText
      // console.log(ticketPrice);
   });
}
