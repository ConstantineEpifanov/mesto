
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const togglePopup = function() {
  popupElement.classList.toggle('popup_opened')
};


popupOpenButtonElement.addEventListener('click', togglePopup);
popupCloseButtonElement.addEventListener('click', togglePopup);


// Находим форму в DOM
let formElement = document.querySelector('.popup__container');
// Находим поля формы в DOM
let nameInput = formElement.querySelectorAll('.popup__input')[0];
let jobInput = formElement.querySelectorAll('.popup__input')[1];

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    nameInput.value;
    jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    let profileTitle = document.querySelector('.profile__info-title');
    let profileSubtitle = document.querySelector('.profile__info-subtitle');
    // Вставьте новые значения с помощью textContent
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    togglePopup()
}

formElement.addEventListener('submit', formSubmitHandler);

