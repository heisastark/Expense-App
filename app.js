//get a heading element
const headingEl = document.querySelector("#headingTotal");

//get the reference to desc element
const inputDesc = document.querySelector("#inputDesc");

//ref to input amount
const inputElement = document.querySelector("#inputAmount");

//get the ref to table
const expenseTableEl = document.querySelector("#expenseTable");

let totalexpense = 0;

//set the heading element to totalexpense
headingEl.textContent = totalexpense;

// allExpenses at one place
const allExpenses = [];

function AddExpenseToTotal() {
  const expenseItem = {};

  //read value from inputAmount
  const textAmount = inputElement.value;

  //read the desc from inputDesc
  const textDesc = inputDesc.value;

  //convert it to number
  const expense = parseInt(textAmount, 10);

  //put it in object
  expenseItem.desc = textDesc;
  expenseItem.amount = expense;
  expenseItem.moment = new Date();

  allExpenses.push(expenseItem);

  console.clear();
  console.table(allExpenses);

  //add value to totalexpense
  totalexpense += expense;

  //set the heading element to totalexpense
  const someText = `Total: ${totalexpense}`;
  headingEl.textContent = someText;

  //show the table here
  // const data1 = allExpenses[0];
  // const data2 = allExpenses[1];

  // const data1Text = `${data1.amount} :: ${data1.desc}`;
  // const data2Text = `${data2.amount} :: ${data2.desc}`;

  // const tableText = `
  //   <div>${data1Text}</div>
  //   <div>${data2Text}</div>
  // `;

  const allExpenseHTML = allExpenses.map(expense => createListItem(expense));

  const joinedAllExpenseHTML = allExpenseHTML.join("");
  console.log(joinedAllExpenseHTML);

  expenseTableEl.innerHTML = joinedAllExpenseHTML;
  console.log(expenseTableEl);
}

//Get the btn element
const element = document.querySelector("#btnAddExpense");
// Listen to click event
element.addEventListener("click", AddExpenseToTotal, false);

function getDate(moment) {
  return moment.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

//View Layer
function createListItem({ desc, amount, moment }) {
  return `
    <li class="list-group-item d-flex justify-content-between">
        <div class="d-flex flex-column">
          ${desc}
          <small class="text-muted">${getDate(moment)}</small>
        </div>
        <div>
          <span class="px-5">
          ${amount}
          </span>
          <button type="button" class="btn btn-outline-danger btn-sm">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
        </li>
    `;
}
