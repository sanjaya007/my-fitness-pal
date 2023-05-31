const contactForm = document.getElementById("contactForm");

const nameInputField = document.getElementById("nameInputField");
const emailInputField = document.getElementById("emailInputField");
const contactInputField = document.getElementById("contactInputField");
const ageInputField = document.getElementById("ageInputField");
const messageInputField = document.getElementById("messageInputField");

const errorBox = document.getElementById("errorBox");
const errorText = document.getElementById("errorText");

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailPattern.test(email);
  return isValid;
}

function thankYouHTML(data) {
  return `
  <div class="thankyou-modal">
  <div class="title">
    <h1>Thank You</h1>
    <p>"${data.name}"</p>
  </div>
  <div class="subtitle">
    <h1>Your Information</h1>
  </div>
  <div class="info">
    <div class="list">
      <h1>Email:</h1>
      <p>${data.email}</p>
    </div>
    <div class="list">
      <h1>Phone:</h1>
      <p>${data.contact}</p>
    </div>
    <div class="list">
      <h1>Age:</h1>
      <p>${data.age}</p>
    </div>
    <div class="list">
      <h1>Message:</h1>
      <p>${data.message}</p>
    </div>
  </div>
</div>
  `;
}

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // validations
  if (nameInputField.value.trim() === "") {
    errorText.innerText = "Your name required !!";
    errorBox.classList.remove("hidden");
    return false;
  }

  if (!validateEmail(emailInputField.value)) {
    errorText.innerText = "Please enter your valid email !!";
    errorBox.classList.remove("hidden");
    return false;
  }

  if (/[a-zA-Z]/.test(contactInputField.value)) {
    errorText.innerText = "Please enter only numeric value for contact !";
    errorBox.classList.remove("hidden");
    return false;
  }

  if (contactInputField.value.trim().length !== 10) {
    errorText.innerText = "Please enter your valid mobile number !!";
    errorBox.classList.remove("hidden");
    return false;
  }

  if (/[a-zA-Z]/.test(ageInputField.value)) {
    errorText.innerText = "Please enter only numeric value for age !";
    errorBox.classList.remove("hidden");
    return false;
  }

  if (ageInputField.value < 18) {
    errorText.innerText = "Age must be over 18 !";
    errorBox.classList.remove("hidden");
    return false;
  }

  if (messageInputField.value.trim() === "") {
    errorText.innerText = "Please enter your message !!";
    errorBox.classList.remove("hidden");
    return false;
  }

  errorText.innerText = "";
  errorBox.classList.add("hidden");

  const contactData = {
    name: nameInputField.value,
    email: emailInputField.value,
    contact: contactInputField.value,
    age: ageInputField.value,
    message: messageInputField.value,
  };

  // set session
  sessionStorage.setItem("contactData", JSON.stringify(contactData));

  // get session
  const sessionData = sessionStorage.getItem("contactData");
  const getData = JSON.parse(sessionData);

  modalBox.innerHTML = "";
  modalWrapper.classList.add("hidden");

  modalWrapper.classList.remove("hidden");
  modalBox.innerHTML = thankYouHTML(getData);
});
