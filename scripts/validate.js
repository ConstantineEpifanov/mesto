// включение валидации вызовом enableValidation
// все настройки передаются при вызове

const enableValidation = (data) => {
  const forms = [...document.querySelectorAll(data.formSelector)]

  forms.forEach(form => {
    const inputs = [...form.querySelectorAll(data.inputSelector)];
    const button = form.querySelector(data.submitButtonSelector);

    inputs.forEach(input => {
      input.addEventListener('input', () => {

        // показать ошибку
        checkInputValidation(input, data)

        // кнопка
        toggleSaveButton(inputs, button, data)
      })
    })
  })
 }

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});

const checkInputValidation = (input, data) => {
  const error = document.querySelector(`#${input.id}-error`)
  if (!input.validity.valid) {
    input.classList.add(data.inputErrorClass);
    error.classList.add(data.errorClass);
    error.textContent = input.validationMessage;
  }
  else {
    input.classList.remove(data.inputErrorClass);
    error.classList.remove(data.errorClass);
    error.textContent = '';
  }
}

const toggleSaveButton = (inputs, button, data) => {
  const isValid = inputs.every(input => input.validity.valid);

  if (isValid) {
    button.disabled = false;
    button.classList.remove(data.inactiveButtonClass);
  }
  else {
    button.disabled = true;
    button.classList.add(data.inactiveButtonClass);
  }
}


