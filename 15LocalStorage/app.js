//select elements
const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
let items = JSON.parse(localStorage.getItem("items")) || [];
const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
const btnAllClear = document.querySelector(".btnAllDelete");
const btnAllChecked = document.querySelector(".btnAllChecked");
const btnCheckedDelete = document.querySelector(".btnCheckedDelete");
const allItems = document.querySelectorAll(".foodItem");

function addItem(e) {
  //create and add items
  const text = this.querySelector("[name=item").value;
  const item = {
    text,
    done: false,
  };

  items.push(item);

  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
  e.preventDefault();
}

function toggleDone(e) {
  //checked items
  if (!e.target.matches("input")) return; // skip this unless its an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function populateList(plates = [], platesList) {
  //add items to UI
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
            <li class="listItem">
                <input class='foodItem' type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      }></input>
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    })
    .join("");
}

function allChecked(e) {
  //All items checked
  items.forEach(function (item) {
    item.done = true;
  });

  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function checkedDelete() {
  //Delete checked items
  items = items.filter(function (item) {
    return item.done === false;
  });

  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function deleteAllItems() {
  // Delete all items function
  while (itemsList.firstElementChild != null) {
    itemsList.firstElementChild.remove();
  }
  localStorage.clear();
  items.splice(0, items.length);
}

//Event Listeners List
addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
btnAllClear.addEventListener("click", deleteAllItems);
btnAllChecked.addEventListener("click", allChecked);
btnCheckedDelete.addEventListener("click", checkedDelete);
populateList(items, itemsList);
