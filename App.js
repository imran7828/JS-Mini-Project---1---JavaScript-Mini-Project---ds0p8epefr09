let inputElement = document.getElementById("inputElement");
let signInTextElement = document.getElementById("signInText");

function signIn() {
  let inputValue = inputElement.value;
  let verifyText = "Hi " + inputValue + ", Welcome to The Guessing Game Arena";
  signInTextElement.textContent = verifyText;
}

