const initialCards = [
  {
    name: 'Петергоф',
    link: 'https://images.unsplash.com/photo-1610197361600-33a3a5073cad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  },
  {
    name: 'Москва',
    link: 'https://images.unsplash.com/photo-1519906448142-1176f5530f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978&q=80'
  },
  {
    name: 'Рускеала',
    link: 'https://images.unsplash.com/photo-1573156667495-f14c98bc2ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Кижи',
    link: 'https://images.unsplash.com/photo-1615529684309-2f17f7bc71e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Card Form
let cardForm = document.querySelector('.popup_card-form');
let cardTitleInput = cardForm.querySelector('.popup__input_edit_title');
let cardUrlInput = cardForm.querySelector('.popup__input_edit_img');

//Delete buttons


const handleLikeButtonClick = (e) => {
  e.target.classList.toggle('card__button-like_active')
}

const handleDeleteButtonClick = (e) => {
  e.target.closest('.card').remove()
}


//Find Template
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');

// Place to place cards from template
const cardsDiv = document.querySelector('.cards');



//Create card from a template
const createCard = (data) => {
  const newCard = cardTemplate.cloneNode(true);

  const cardTitle = newCard.querySelector('.card__title');
  const cardImage = newCard.querySelector('.card__image');

  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  const cardDeleteButton = newCard.querySelector('.card__button-delete');
  const cardLikeButton = newCard.querySelector('.card__button-like');

  cardLikeButton.addEventListener('click', handleLikeButtonClick);
  cardDeleteButton.addEventListener('click', handleDeleteButtonClick);

  return newCard;
}

//Place card
const renderCard = (data) => {
  const cardElement = createCard(data);
  cardsDiv.prepend(cardElement);
}

//f for each card from template
initialCards.forEach(data => {
  renderCard(data);
})

//Like button toggle
const likeCard = function () {
  cardLikeButton.classList.toggle('card__button-like_active');
};


// Popup style
const popupOpacity = document.querySelector('.popup');

// Popup containers
const popupProfile = document.querySelector('.popup_profile');
const popupCards = document.querySelector('.popup_cards');
const popupImage = document.querySelector('.popup_image');


// Where are Open popups
const popupProfileFormButtonOpen = document.querySelector('.profile__edit-button');
const popupCardFormButtonOpen = document.querySelector('.profile__add-button');

// Where are Close popups
const popupProfileFormButtonClose = popupProfile.querySelector('.popup__close-button_profile');
const popupCardFormButtonClose = popupCards.querySelector('.popup__close-button_card');
const popupImageButtonClose = popupImage.querySelector('.popup__close-button_image');



const openPopup = function (item) {
  item.classList.add('popup_opened');
};

const closePopup = function (item) {
  item.classList.remove('popup_opened');
};

// Profile
let profileForm = document.querySelector('.popup_profile-form');
let nameInput = profileForm.querySelector('.popup__input_edit_name');
let jobInput = profileForm.querySelector('.popup__input_edit_status');
let profileTitle = document.querySelector('.profile__info-title');
let profileSubtitle = document.querySelector('.profile__info-subtitle');


function profileFormSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupProfile)
};


function cardFormSubmitHandler(evt) {
  evt.preventDefault();
  renderCard({
    name: cardTitleInput.value,
    link: cardUrlInput.value
  })
  closePopup(popupCards)
};

profileForm.addEventListener('submit', profileFormSubmitHandler);
popupCards.addEventListener('submit', cardFormSubmitHandler);

popupProfileFormButtonOpen.addEventListener('click', function () { openPopup(popupProfile) });
popupProfileFormButtonClose.addEventListener('click', function () { closePopup(popupProfile) });
popupCardFormButtonOpen.addEventListener('click', function () { openPopup(popupCards) });
popupCardFormButtonClose.addEventListener('click', function () { closePopup(popupCards) });
// popupImageButtonOpen.addEventListener('click', function() {openPopup(popupImage)});
popupImageButtonClose.addEventListener('click', function () { closePopup(popupImage) });




