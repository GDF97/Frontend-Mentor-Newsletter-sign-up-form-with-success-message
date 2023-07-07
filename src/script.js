// Variables
const newsletterForm = document.querySelector(".Newsletter-Form");
const newsletterSuccess = document.querySelector(".Newsletter-Form-Success");
const submitButton = document.getElementById("submitButton");
const dismissButton = document.getElementById("dismissButton");
let userEmail = document.getElementById("userEmail");
let errorMessage = document.querySelector(".errorMessage");

// Functions
const ValidadeEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const SubmitEmail = () => {
  let email = document.getElementById("inputEmail");
  if (!email.value) {
    errorMessage.style.display = "flex";
    email.classList.add("error");
  } else {
    if (ValidadeEmail(email.value)) {
      newsletterForm.classList.replace("active", "inactive");
      newsletterSuccess.classList.replace("inactive", "active");
      userEmail.textContent = email.value;
      email.value = "";
      errorMessage.style.display = "none";
      email.classList.remove("error");
    } else {
      errorMessage.style.display = "flex";
      email.classList.add("error");
    }
  }
};

const DismissMessage = () => {
  newsletterForm.classList.replace("inactive", "active");
  newsletterSuccess.classList.replace("active", "inactive");
};

// Events
submitButton.addEventListener("click", SubmitEmail);

dismissButton.addEventListener("click", DismissMessage);
