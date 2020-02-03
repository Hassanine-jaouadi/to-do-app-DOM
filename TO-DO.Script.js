/* Data  */ //
const userInput = document.getElementById("input-field");
const list = document.getElementById("my-list");
let id = 0;
/* functions  */
document.getElementById("add-btn").addEventListener("click", () => {
  const li = `<li class="li-item">
    <span id=${id}>
    ${userInput.value}
    </span>
    <button class="delete-btn" onClick=deleteItem(${id})>Delete</button>
    <button class="check-btn" onClick=done(${id})>Done</button>
    </li>`;
  //console.log("userInput.value :", userInput.value);
  if (userInput.value == "") {
    return alert("input field cannot be empty");
  } else {
    list.insertAdjacentHTML("beforeend", li);
  }
  id++;
});
const done = id =>
  document
    .getElementById(id)
    .setAttribute("style", "text-decoration:line-through");

const deleteItem = id => document.getElementById(id).parentElement.remove();
// let liList = document.createElement("li")
// let btnDelete = document.createElement("button")
// btnDelete.innerHTML = "delete"
// liList.appendChild(btnDelete)

// let btnDone = document.createElement("button")
// btnDone.innerHTML = "Done"
// liList.appendChild(btnDone)

// let textNode = document.createTextNode(userInput.value)
// liList.appendChild(textNode)
//   // list.appendChild(liList)
//   let btnComplete = Array.from(document.querySelectorAll(".check-btn"));
//   console.log("btnComplete :", btnComplete);
//   for (let index in btnComplete) {

//     btnComplete[index].addEventListener("click", () => {
//       console.log(btnComplete[index]);
//       //   if (button.style.textDecoration === "line-through") {

//       //   button.style.textDecoration =
//       //     button.style.textDecoration === "line-through" ? "none" : "line-through";
//     });
//   }

//   let btnDelete = document.querySelectorAll(".delete-btn");

//   for (let button of btnDelete) {
//     button.addEventListener("click", () => {
//       button.parentElement.remove();
//     });
//   }
//   //   btnDelete.forEach(btn => {
//   //     btn.addEventListener("click", function() {
//   //       btn.parentElement.remove();
//   //     });
//   //   });
// });

// // delete item

// /*function removeFromList(btn1) {
//   let item = document.querySelectorAll("li-item");
//   console.log(item);
//   item.[]remove();

//   //document.getElementById("li-item").removeChild(list);

//   // list.removeChild(list.childNodes[0]);
//   //document.getElementsByClassName("delete-btn").innerHTML = "";
// }*/

// // complete item

// /*function checkItem() {
//   let item = document.getElementsByClassName("li-item");
//   item.style.textDecoration = "line through";
// } */
