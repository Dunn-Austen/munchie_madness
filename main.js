// GLOBAL VARIABLES

var eventParentOne = document.querySelector(".form");
var addButton = document.querySelector(".add-button");
var eventParentTwo = document.querySelector(".grocery-list");

// EVENTLISTENERS

eventParentOne.addEventListener('click', function(event) {
  event.preventDefault();
  if (event.target.classList.contains('add-button')) {
    insertCard();
  }
});

eventParentTwo.addEventListener('click', function(event) {
  event.preventDefault();
  if (event.target.classList.contains('delete-button')) {
    deleteCard();
  }
});

// FUNCTIONS

// Function for dynamically generating HTML "card" with user-input values for item & item description. Nested conditional regards validation of input (submit)
function insertCard() {
  var toggleButton = document.getElementById('toggle');
  var newCard = document.createElement("article");
  var snackItemValue = document.querySelector(".snack-item").value;
  var snackDescriptionValue = document.querySelector(".snack-desc").value;
    if (snackItemValue != "" && snackDescriptionValue != "") {
      toggleButton.disabled = false;
      document.querySelector('.grocery-list').appendChild(newCard);
      newCard.classList.add('snack-card');
      newCard.innerHTML =
      `
      <dl class="list">
        <dt id="snack-edit">${snackItemValue}</dt>
        <dd id="info-edit">${snackDescriptionValue}</dd>
      </dl>
      <div id="edit-message">You may edit your text by selecting it!</div>
      <button class="delete-button">Delete</button>
      `;
      } else {
        toggleButton.disabled = true;
      }
    };

// Function for removing dynamically generated cards per delete button
function deleteCard() {
  var deleteButton = document.querySelector('.delete-button');
  var removeCard = document.querySelector('.snack-card');
  removeCard.remove();
}

// Non-functional attempts based off of quick web research. Investigate further: .userEdits, associating with user event, general localstorage context
function editCapture() {
  var editSnack = document.getElementById("snack-edit");
  var editInfo = document.getElementById("info-edit");
  var userSnackEdit = editSnack.innerHTML;
  var userInfoEdit = editInfo.innerHTML;
  localStorage.userEdits = userSnackEdit;
  localStorage.userEdits = userInfoEdit;
  document.getElementById("edit-message").innerHTML="Your edits have been stored!";
}

function postEdits() {
  //
  if (localStorage.userEdits != null) {
    document.getElementById("snack-edit").innerHTML = localStorage.userEdits;
    document.getElementById("info-edit").innerHTML = localStorage.userEdits;
  }
}

// Function for input field validation tied to add button - DOESN'T WORK. Alternative procedure // Procedure for disabling button. I added the disabled attribute in the HTML and addressed the validation via if condition
// function disableAddButton() {
//   var snackItemValue = document.querySelector(".snack-item").value;
//   var snackDescriptionValue = document.querySelector(".snack-desc").value;
//   if (snackItemValue == "" && snackDescriptionValue == "") {
//     document.querySelector(".add-button").setAttribute("disabled", "disabled");
//   }
// }
