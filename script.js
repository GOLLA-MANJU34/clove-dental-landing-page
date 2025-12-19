const DesktopForm = document.getElementById("user-details-form-desktop");
const MobileForm = document.getElementById("user-details-form-mb");

const nameInput = document.getElementById("name");
const mobileInput = document.getElementById("mobile");
const captchaInput = document.getElementById("captcha");
const errorText = document.getElementById("error-msg");
const mobileErrorMsg = document.getElementById("mobile-error-msg");
const captchaButton = document.getElementById("get-captcha");
const captchaText = document.getElementById("rand-captcha");
const checkboxInput = document.getElementById("checkbox");

// Mobile Interation

const MobileNameInput = document.getElementById("name-mb");
const MobileMobileInput = document.getElementById("mobile-mb");
const MobileCaptchaInput = document.getElementById("captcha-mb");
const MobileErrorText = document.getElementById("error-msg-mb");
const MobileMobileErrorMsg = document.getElementById("mobile-error-msg-mb");
const MobileCaptchaButton = document.getElementById("get-captcha-mobile");
const MobileCaptchaText = document.getElementById("rand-captcha-mb");
const MobileCheckboxInput = document.getElementById("checkbox-mb");

let MobileRandCaptcha = null;
let DesktopRandCaptcha = null;


// Desktop version

function DesktopGetCaptch() {
  const mobileValue = mobileInput.value.trim();
  const nameValue = nameInput.value.trim();

  if (nameValue === "") {
    mobileErrorMsg.textContent = "* Enter a Valid Name";
    mobileErrorMsg.classList.add("input-error");
    mobileInput.value = "";
    nameInput.value = "";
    return;
  }

  if (mobileValue.length !== 10 || isNaN(mobileValue)) {
    mobileErrorMsg.textContent = "* Enter a valid 10-digit mobile number.";
    mobileErrorMsg.classList.add("input-error");
    mobileInput.value = "";
    nameInput.value = "";
    return;
  }

  DesktopRandCaptcha = String(Math.floor(Math.random() * 10000)).padStart(4, "0");

  captchaText.textContent = DesktopRandCaptcha;
  captchaText.classList.add("captcha-digit");
  errorText.textContent = "";
  mobileErrorMsg.textContent = "";
}

captchaButton.addEventListener("click", DesktopGetCaptch);


DesktopForm.addEventListener("submit", function (event) {
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

  if (captchaInput.value !== String(DesktopRandCaptcha)) {
    errorText.textContent = "Enter a valid captcha";
    errorText.classList.add("input-error");
    return;
  }

  alert("Thank you! We will contact you soon.");

  DesktopForm.reset();

  captchaText.textContent = "";
  DesktopRandCaptcha = null;
  errorText.textContent = "";
  errorText.classList.remove("input-error");
  captchaText.classList.remove("captcha-digit");
});


// Mobile Version

function MobileGetCaptch() {
  const mobileValue = MobileMobileInput.value.trim();
  const nameValue = MobileNameInput.value.trim();

  if (nameValue === "") {
    MobileMobileErrorMsg.textContent = "* Enter a Valid Name";
    MobileMobileErrorMsg.classList.add("input-error");
    MobileMobileInput.value = "";
    MobileNameInput.value = "";
    return;
  }

  if (mobileValue.length !== 10 || isNaN(mobileValue)) {
    MobileMobileErrorMsg.textContent = "* Enter a valid 10-digit mobile number.";
    MobileMobileErrorMsg.classList.add("input-error");
    MobileMobileInput.value = "";
    MobileNameInput.value = "";
    return;
  }

  MobileRandCaptcha = String(Math.floor(Math.random() * 10000)).padStart(4, "0");

  MobileCaptchaText.textContent = MobileRandCaptcha;
  MobileCaptchaText.classList.add("captcha-digit");
  MobileErrorText.textContent = "";
  MobileMobileErrorMsg.textContent = "";
}

MobileCaptchaButton.addEventListener("click", MobileGetCaptch);

MobileForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!MobileCheckboxInput.checked) {
    alert("* Required to agree terms and conditions");
    return;
  } else MobileNameInput.classList.remove("input-error");
  MobileMobileInput.classList.remove("input-error");
  MobileCaptchaInput.classList.remove("input-error");

  const nameValue = MobileNameInput.value.trim();
  const mobileValue = MobileMobileInput.value.trim();
  const captchaValue = MobileCaptchaInput.value.trim();

  if (!nameValue || !mobileValue || !captchaValue) {
    MobileErrorText.textContent = "* Please fill all the fields.";
    if (!nameValue) MobileErrorText.classList.add("input-error");
    if (!mobileValue) MobileErrorText.classList.add("input-error");
    if (!captchaValue) MobileErrorText.classList.add("input-error");
    return;
  }

  if (MobileCaptchaInput.value !== String(MobileRandCaptcha)) {
    MobileErrorText.textContent = "Enter a valid captcha";
    MobileErrorText.classList.add("input-error");
    return;
  }

  alert("Thank you! We will contact you soon.");

  MobileForm.reset();

  MobileCaptchaText.textContent = "";
  MobileRandCaptcha = null;
  MobileErrorText.textContent = "";
  MobileErrorText.classList.remove("input-error");
  MobileCaptchaText.classList.remove("captcha-digit");
});
