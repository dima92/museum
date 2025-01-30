export function validate() {
  const inputField = document.querySelectorAll(".input-field");
  const errorFields = document.querySelectorAll(".validity");

  function clearContent(e) {
    if (
      e.target.value == "Name" ||
      e.target.value == "E-mail" ||
      e.target.value == "Phone"
    ) {
      e.target.value = "";
    } else {
      errorFields.forEach((el) => (el.style.display = "none"));
      e.target.classList.remove("invalid");
    }
  }

  function validate(e) {
    if (!e.target.validity.valid || e.target.value == "") {
      if (e.target.id == "person-name") errorFields[0].style.display = "inline";
      if (e.target.id == "person-email")
        errorFields[1].style.display = "inline";
      if (e.target.id == "person-tel") errorFields[2].style.display = "inline";
      e.target.classList.add("invalid");
    }
  }

  inputField.forEach((el) => {
    el.addEventListener("focus", clearContent),
      el.addEventListener("blur", validate);
  });
}
