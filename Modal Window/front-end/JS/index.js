window.onload = function () {
  let BlackTheme = false;
  const buttonRegistration = document.querySelector(".button-registration"),
    buttonRegistrationClose = document.querySelector(".registration-close"),
    buttonRegistrationCreate = document.querySelector(".registration-create");

  buttonRegistration.addEventListener("click", function () {
    const registrationForm = document.querySelector(".registration-form");
    registrationForm.style.display = "block";
  });
  buttonRegistrationClose.addEventListener("click", function () {
    const registrationForm = document.querySelector(".registration-form");
    registrationForm.style.display = "none";
  });
  buttonRegistrationCreate.addEventListener("click", function () {
    if (!confirm("Your account is succesful created"))
      return (registrationForm.style.display = "block");
    const registrationForm = document.querySelector(".registration-form");
    return (registrationForm.style.display = "none");
  });
};
color.onclick = function () {
  this.style.backgroundColor = "red";
};
