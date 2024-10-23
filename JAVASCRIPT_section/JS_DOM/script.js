let accessing = document.getElementsByClassName("accessing");
let manipulating = document.getElementsByClassName("Traversing");
let traversing = document.getElementsByClassName("manipulating");
let addingAndInserting = document.getElementsByClassName(
  "Adding and inserting"
);
let removing = document.querySelector(".removing");

// example 1

let accessingBtn = document
  .querySelector(".accessingBtn")
  .addEventListener("click", function () {
    document.querySelector(".accessing-Paragraph").innerHTML = "Clicked !";
    setTimeout(function () {
      document.querySelector(".accessing-Paragraph").innerHTML =
        "This is a paragraph. Click the button to change me for five seconds !";
    }, 5000);
  });

// example 2

let cityList = document.querySelector(".citiesList");
let traversingBtn = document
  .querySelector(".traversingBtn")
  .addEventListener("click", function () {
    cityList.firstElementChild.classList.add("highlight");
    setTimeout(function () {
      cityList.firstElementChild.classList.remove("highlight");
    }, 3000);
  });

// example 3

let orderChange = document.getElementsByClassName("orderChange");
let orderType = document.getElementById("orderType");
document
  .querySelector(".manipulatingBtn")
  .addEventListener("click", function () {
    orderType.textContent = "Espresso";
    // orderType.style.backgroundColor = "white"
    // orderType.style.color = "black"
    setTimeout(function () {
      orderType.textContent = "Latte";
    }, 3000);
  });

// example 4

let addBtn = document.querySelector(".addBtn");

addBtn.addEventListener("click", function () {
  let shoppingItems = document.querySelector(".shoppingItems");
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";

  shoppingItems.appendChild(newItem);
});

// example 5

let removingBtn = document.querySelector(".removingBtn");
removingBtn.addEventListener("click", function () {
  document.querySelector(".taskList").lastElementChild.remove();
});

// example 6

document.querySelector(".handlingBtn").addEventListener("mouseover", function () {
  alert("Hello MAH!");
});

// example 7

let teaList = document
  .querySelector(".teaList")
  .addEventListener("click", function (event) {
    // console.log(event.target)
    if (event.target) {
      alert(`${event.target.textContent} is ready.`);
    }
  });

// example 8

let feedbackDisplay = document.querySelector(".feedbackDisplay");

let feedback = document.querySelector(".feedbackInput");

document
  .querySelector(".feedbackBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log(feedback.value);

    feedbackDisplay.textContent = `feedback is ${feedback.value}`;
  });

// example 9

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".DOMstatus").textContent = `DOM fully loaded`;
  }, 3000);
});

// example 10

document
  .querySelector(".cssManipulationBtn")
  .addEventListener("click", function () {
    document.querySelector(".manipulationPara").classList.toggle("highlight")
    document.querySelector(".manipulationPara").classList.toggle("boldText")
  });
