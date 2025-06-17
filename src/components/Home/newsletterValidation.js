export default function validateNewsletterForm(event) {
  event.preventDefault();

  function checkEmail(email) {
    const emailRegEx = /^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,})+$/;
    return emailRegEx.test(email);
  }

  const form = event.target;

  if (form.email.value.length === 0) {
    form.email.setCustomValidity("Email not filled in!");
    form.email.nextElementSibling.textContent = form.email.validationMessage;
    form.email.focus();
  } else if (!checkEmail(form.email.value)) {
    form.email.setCustomValidity("Email not valid!");
    form.email.nextElementSibling.textContent = form.email.validationMessage;
    form.email.focus();
  } else {
    form.email.setCustomValidity("");
    form.email.nextElementSibling.textContent = "";
  }

  if (form.checkValidity()) {
    const dialog = document.querySelector("#contact__dialog");
    if (dialog) {
      dialog.showModal();
      setTimeout(() => {
        dialog.close();
        form.reset();
      }, 2500);
    }
  }
}
