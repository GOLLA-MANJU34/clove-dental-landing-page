const form = document.getElementById("user-details-form");
const nameInput = document.getElementById("name");
const mobileInput = document.getElementById("mobile");
const captchaInput = document.getElementById("captcha");
const errorText = document.getElementById("error-msg");
const mobileErrorMsg = document.getElementById("mobile-error-msg");
const captchaButton = document.getElementById("get-captcha");
const captchaText = document.getElementById("rand-captcha");
const checkboxInput = document.getElementById("checkbox");

let randCaptcha = null;
function getCaptch() {
  const mobileValue = mobileInput.value.trim();
  const nameValue = nameInput.value.trim();

  if (nameValue === "" || mobileValue.length !== 10 || isNaN(mobileValue)) {
    mobileErrorMsg.textContent =
      "Enter a valid 10-digit mobile number or name.";
    mobileErrorMsg.classList.add("input-error");
    mobileInput.value = "";
    nameInput.value = "";
    return;
  }

  randCaptcha = Math.ceil(Math.random() * 10000);

  captchaText.textContent = randCaptcha;
  captchaText.classList.add("captcha-digit");
  errorText.textContent = "";
  mobileErrorMsg.textContent = "";
}

captchaButton.addEventListener("click", getCaptch);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!checkboxInput.checked) {
    alert("* Required to agree terms and conditions");
    return;
  } else nameInput.classList.remove("input-error");
  mobileInput.classList.remove("input-error");
  captchaInput.classList.remove("input-error");

  const nameValue = nameInput.value.trim();
  const mobileValue = mobileInput.value.trim();
  const captchaValue = captchaInput.value.trim();

  if (!nameValue || !mobileValue || !captchaValue) {
    errorText.textContent = "* Please fill all the fields.";
    if (!nameValue) errorText.classList.add("input-error");
    if (!mobileValue) errorText.classList.add("input-error");
    if (!captchaValue) errorText.classList.add("input-error");
    return;
  }

  if (captchaInput.value !== String(randCaptcha)) {
    errorText.textContent = "Enter a valid captcha";
    errorText.classList.add("input-error");
    return;
  }

  alert("Thank you! We will contact you soon.");

  form.reset();

  captchaText.textContent = "";
  randCaptcha = null;
  errorText.textContent = "";
  errorText.classList.remove("input-error");
  captchaText.classList.remove("captcha-digit");
});
