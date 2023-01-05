/* -------------------------------------------------------------------------- */
/*                               // cards array                               */
/* -------------------------------------------------------------------------- */
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

/* -------------------------------------------------------------------------- */
/*                               // Elements                                  */
/* -------------------------------------------------------------------------- */
const profileContainer = document.querySelector(".profile__info");
const editProfileBtn = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditModalForm = profileEditModal.querySelector(".modal__form");
const closeEditProfileBtn = profileEditModal.querySelector(
  ".modal__close-button"
);
const saveEditProfileBtn = profileEditModal.querySelector(
  ".modal__save-button"
);
const profileName = profileContainer.querySelector(".profile__title");
const profileDescription = profileContainer.querySelector(
  ".profile__description"
);
const profileNameInput = profileEditModalForm.querySelector(
  "#profile-name-input"
);
const profileDescriptionInput = profileEditModalForm.querySelector(
  "#profile-description-input"
);
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/* -------------------------------------------------------------------------- */
/*                               // Functions                       */
/* -------------------------------------------------------------------------- */

function closeModal() {
  profileEditModal.classList.remove("modal_opened");
}

function openModal() {
  profileEditModal.classList.add("modal_opened");
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

function handlerProfileEditSubmit(e) {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal();
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__label");
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;
  return cardElement;
}

/* -------------------------------------------------------------------------- */
/*                               // open edit profile                         */
/* -------------------------------------------------------------------------- */

editProfileBtn.addEventListener("click", openModal);

/* -------------------------------------------------------------------------- */
/*                               // close edit profile                        */
/* -------------------------------------------------------------------------- */

closeEditProfileBtn.addEventListener("click", closeModal);

/* -------------------------------------------------------------------------- */
/*                        // submit edit profile title and desc               */
/* -------------------------------------------------------------------------- */

profileEditModalForm.addEventListener("submit", handlerProfileEditSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.append(cardElement);
});
