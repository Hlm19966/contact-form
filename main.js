const submitBtn = document.getElementById("submitBtn");
const nameError = document.querySelectorAll(".error-message");
const firstName = document.getElementById("FirstName");
const lastName = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const messsageInput = document.getElementById("message");
const checkBox = document.getElementById("agreeing");
const successContainer = document.querySelector(".success-container");




submitBtn.addEventListener("click", (event)=> {
  event.preventDefault();
  const isFirstNameValid = handleFirstName();
  const isLastNameValid = handleLastName();
  const isEmailValid = handelEmail();
  const isQueryTypeValid = handleQueryType();
  const isMessageValid = handleMessage();
  const isCheckBoxValid = handelCheckBox();

  if (isFirstNameValid && isLastNameValid && isEmailValid && isQueryTypeValid && isMessageValid &&isCheckBoxValid){
    successContainer.style.display = "block";
  } else{
    successContainer.style.display = "none";
  }
});


 

function handleFirstName() {
const firstNameValue = firstName.value.trim();
const errorMessage = nameError[0];

 if (firstNameValue.length < 3 || !isNaN(firstNameValue)) {
   errorMessage.style.display = "block";
   firstName.classList.add(`error-border`);
   return false;
 } else {
  errorMessage.style.display = "none";
  firstName.classList.remove(`error-border`);
  return true;
 }
}


function handleLastName() {
  const lastNameValue = lastName.value.trim();
  const errorMessage = nameError[1];

  if (lastNameValue.length < 4 || !isNaN(lastNameValue)) {
    errorMessage.style.display = "block";
    lastName.classList.add(`error-border`);
    return false;
  } else {
    errorMessage.style.display = "none";
    lastName.classList.remove(`error-border`);
    return true;
  }
}


function handelEmail() {
  const email  = emailInput.value.trim();
  errorMessage = nameError[2];
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if(!isValidEmail) {
    errorMessage.style.display = "block";
    emailInput.classList.add('error-border');
    return false;
  } else {
      errorMessage.style.display = "none";
      emailInput.classList.remove(`error-border`);
      return true;
    }
  
  }
  
  
  function handleQueryType() {
    const selectedOption = document.querySelector('input[name="query-type"]:checked');
    const errorMessage = nameError[3];
  
    if(selectedOption) {
      errorMessage.style.display = "none";
      return true;
    } else {
      errorMessage.style.display = "block";
      return false;
    }
  }
  
  function handleMessage() {
    const message = messsageInput.value.trim();
    const errorMessage = nameError[4];
  
    if(message.length < 13) {
      errorMessage.style.display = "block";
      messsageInput.classList.add(`error-border`);
      return false;
    } else {
      errorMessage.style.display = "none";
      messsageInput.classList.remove(`error-border`);
      return true;
    }
  }
  
  
  function handelCheckBox() {
    const errorMessage = nameError[5];
  
    if (checkBox.checked) {
      errorMessage.style.display = "none";
      checkBox.classList.remove(`error-border`);
      return true;
    } else {
      errorMessage.style.display = "block";
      checkBox.classList.remove(`error-border`);
      return false;
    }
  }
  