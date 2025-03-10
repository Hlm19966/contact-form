const submitBtn = document.getElementById("submitBtn");
const nameError = document.querySelectorAll(".error-message");
const firstName = document.getElementById("FirstName");
const lastName = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const selectedOption = document.querySelector('input[name="query-type"]:checked');
const messsageInput = document.getElementById("message");
const checkBox = document.getElementById("agreeing");




submitBtn.addEventListener("click", (event)=> {
  event.preventDefault();
  handleFirstName();
  handleLastName();
  handelEmail();
  handleQueryType();
  handleMessage();
  handelCheckBox();
});


 

function handleFirstName() {
const firstNameValue = firstName.value.trim();
const errorMessage = nameError[0];

 if (firstNameValue.length < 3 || !isNaN(firstNameValue)) {
   errorMessage.style.display = "block";
   firstName.classList.add(`error-border`);
 } else {
  errorMessage.style.display = "none";
  firstName.classList.remove(`error-border`);
 }
}


function handleLastName() {
  const lastNameValue = lastName.value.trim();
  const errorMessage = nameError[1];

  if (lastNameValue.length < 4 || !isNaN(lastNameValue)) {
    errorMessage.style.display = "block";
    lastName.classList.add(`error-border`);
  } else {
    errorMessage.style.display = "none";
    lastName.classList.remove(`error-border`);
  }
}


function handelEmail() {
  const email  = emailInput.value.trim();
  errorMessage = nameError[2];
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if(!isValidEmail) {
    errorMessage.style.display = "block";
    emailInput.classList.add('error-border');
  } else {
    errorMessage.style.display = "none";
    emailInput.classList.remove(`error-border`);
  }

}


function handleQueryType() {
  const errorMessage = nameError[3];

  if(selectedOption) {
    errorMessage.style.display = "none";
  } else {
    errorMessage.style.display = "block";
  }
}

function handleMessage() {
  const message = messsageInput.value.trim();
  const errorMessage = nameError[4];

  if(message.length < 13) {
    errorMessage.style.display = "block";
    messsageInput.classList.add(`error-border`);
  } else {
    errorMessage.style.display = "none";
    messsageInput.classList.remove(`error-border`);
  }
}


function handelCheckBox() {
  const errorMessage = nameError[5];

  if (checkBox.checked) {
    errorMessage.style.display = "none";
    checkBox.classList.remove(`error-border`);
  } else {
    errorMessage.style.display = "block";
    checkBox.classList.remove(`error-border`);
  }
}

