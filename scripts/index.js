import { initialCards } from './cards.js'

// Card Form
const cardForm = document.querySelector('.popup__form_card');
const cardTitleInput = cardForm.querySelector('.popup__input_edit_title');
const cardUrlInput = cardForm.querySelector('.popup__input_edit_img');

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




// Profile
const profileForm = document.querySelector('.popup__form_profile');
const nameInput = profileForm.querySelector('.popup__input_edit_name');
const jobInput = profileForm.querySelector('.popup__input_edit_status');
const profileTitle = document.querySelector('.profile__info-title');
const profileSubtitle = document.querySelector('.profile__info-subtitle');

//Find Template
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');

// Place to place cards from template
const cardsDiv = document.querySelector('.cards');

const imageFull = popupImage.querySelector('.popup__image')
const imageFullTitle = popupImage.querySelector('.popup__image-title')

const handleLikeButtonClick = (e) => {
  e.target.classList.toggle('card__button-like_active')
}

const handleDeleteButtonClick = (e) => {
  e.target.closest('.card').remove()
}


const handleImageButtonClick = (e) => {
  const imageTitle = e.target.closest('.card').querySelector('.card__title')
  imageFull.src = e.target.src
  imageFull.alt = e.target.alt
  imageFullTitle.textContent = imageTitle.textContent
  openPopup(popupImage);
}


const openPopup = function (item) {
  item.classList.add('popup_opened');
  item.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        closePopup(item);
      }
    })
  document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closePopup(item);
      }
    })
};

const closePopup = function (item) {
  item.classList.remove('popup_opened');
  item.removeEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        closePopup(item);
      }
    })
  document.removeEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closePopup(item);
      }
    })
};


function handleProfileFormSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupProfile)
};


function handleCardFormSubmit(e) {
  e.preventDefault();
  renderCard({
    name: cardTitleInput.value,
    link: cardUrlInput.value
  })
  closePopup(popupCards)
};


//Listeners
profileForm.addEventListener('submit', handleProfileFormSubmit);

popupCards.addEventListener('submit', handleCardFormSubmit);

popupProfileFormButtonOpen.addEventListener('click', function () {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(popupProfile);
});

popupProfileFormButtonClose.addEventListener('click', function () { closePopup(popupProfile) });

popupCardFormButtonOpen.addEventListener('click', function () {
  cardForm.reset();
  openPopup(popupCards);
});

popupCardFormButtonClose.addEventListener('click', function () { closePopup(popupCards) });

popupImageButtonClose.addEventListener('click', function () { closePopup(popupImage) });



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
  cardImage.addEventListener('click', handleImageButtonClick);

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
