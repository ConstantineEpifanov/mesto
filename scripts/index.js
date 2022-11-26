const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');


// Находим форму в DOM
let formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__input_edit_name');
let jobInput = formElement.querySelector('.popup__input_edit_status');
let profileTitle = document.querySelector('.profile__info-title');
let profileSubtitle = document.querySelector('.profile__info-subtitle');

const openPopup = function () {
  popupElement.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
};

const closePopup = function () {
  popupElement.classList.remove('popup_opened');
};

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  // Выберите элементы, куда должны быть вставлены значения полей
  // Вставьте новые значения с помощью textContent
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup()
};

formElement.addEventListener('submit', formSubmitHandler);
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
