const calculae = document.querySelector(".calculate");
const subTotal = document.querySelector(".sub-total");
const discount = document.querySelector(".discount");
const vat = document.querySelector(".vat");
const grandAmount = document.querySelector(".grand-amount");
const reset = document.querySelector(".reset");

let total = 0;
let discountValue = 0;
let vatValue = 0;
let grandTotal = 0;

calculae.addEventListener("click", () => {
  let input1 = Number(document.getElementById("item1").value);
  let input2 = Number(document.getElementById("item2").value);
  let input3 = Number(document.getElementById("item3").value);
  let input4 = Number(document.getElementById("item4").value);
  total = input1 + input2 + input3 + input4;
  discountValue = total * 0.2;
  vatValue = total * 0.1;
  grandTotal = total + vatValue - discountValue;

  if (total % 1 === 0) {
    subTotal.innerHTML = `Sub Total: <span >$ ${total}.00</span>`;
  } else {
    subTotal.innerHTML = `Sub Total: <span >$ ${total}</span>`;
  }
  discount.innerHTML = `Discount: <span >- $ ${discountValue.toFixed(
    2
  )}</span>`;

  vat.innerHTML = `VAT: <span>$ ${vatValue.toFixed(2)}</span>`;
  grandAmount.innerHTML = `Grand Total: <span>$ ${grandTotal.toFixed(
    2
  )}</span>`;
});

reset.addEventListener("click", () => location.reload());
