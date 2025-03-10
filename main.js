const submitBtn = document.getElementById("submitBtn");
const firstName = document.getElementById("FirstName");
const lastName = document.getElementById("lastName");
const nameError = document.querySelector("#name-error");




submitBtn.addEventListener("click", (event)=> {
  event.preventDefault();
  handleFirstName();
});




function handleFirstName() {
 const firstNameValue = firstName.value.trim();
 if (firstNameValue.length < 3 || !isNaN(firstNameValue)) {
   nameError.style.display = "block";
   firstName.classList.add(`error-border`);
 } else {
  nameError.style.display = "none";
  firstName.classList.remove(`error-border`);
 }
}