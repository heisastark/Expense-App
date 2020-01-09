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

  RenderList(allExpenses);
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

function deleteItem(dateValue) {
  // const newArr = [];
  // for(let i=0; i<allExpenses.length; i++){
  //   if(allExpenses.moment.valueOf() !== dateValue){
  //     newArr.push(allExpenses[i]);
  //   }
  // }

  const newArr = allExpenses.filter(
    expense => expense.moment.valueOf() !== dateValue
  );
  RenderList(newArr);
}

function RenderList(arrOfList) {
  const allExpenseHTML = arrOfList.map(expense => createListItem(expense));
  const joinedAllExpenseHTML = allExpenseHTML.join("");
  expenseTableEl.innerHTML = joinedAllExpenseHTML;
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
          <button type="button" class="btn btn-outline-danger btn-sm" onclick="deleteItem(${moment.valueOf()})">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
        </li>
    `;
}
