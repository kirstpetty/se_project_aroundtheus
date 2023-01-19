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

const cardAddModal = document.querySelector("#card-add-modal");
const cardAddButton = document.querySelector("#add-button");
const cardAddCloseButton = cardAddModal.querySelector(".modal__close-button");
const cardAddModalForm = document.querySelector("#card-add-form");
const CardSaveAddButton = cardAddModal.querySelector("modal__save-button");

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

const cardImagePreviewModal = document.querySelector("#cardImagePreviewModal");
const cardImagePreviewCloseButton = cardImagePreviewModal.querySelector(
  ".modal__close-button"
);
const cardImagePreview = cardImagePreviewModal.querySelector(
  ".modal__img-preview"
);
const cardImageCaption = cardImagePreviewModal.querySelector(
  ".modal__preview-caption"
);

/* -------------------------------------------------------------------------- */
/*                               // Functions                       */
/* -------------------------------------------------------------------------- */

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function handleLikeButton(e) {
  e.target.classList.toggle("card__like-button_active");
}

function handleCardDeleteButton(e) {
  e.target.closest(".card").remove();
}

function renderCard(cardElement, container) {
  container.prepend(cardElement);
}

function showPreviewImage(card) {
  cardImagePreview.src = card.link;
  cardImagePreview.alt = card.name;
  cardImageCaption.textContent = card.name;
  openModal(cardImagePreviewModal);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__label");

  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardImageEl.addEventListener("click", () => showPreviewImage(cardData));
  cardTitleEl.textContent = cardData.name;
  cardLikeButton.addEventListener("click", handleLikeButton);
  cardDeleteButton.addEventListener("click", handleCardDeleteButton);

  return cardElement;
}

/* -------------------------------------------------------------------------- */
/*                               // open edit profile                         */
/* -------------------------------------------------------------------------- */

editProfileBtn.addEventListener("click", () => {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

/* -------------------------------------------------------------------------- */
/*                               // close edit profile                        */
/* -------------------------------------------------------------------------- */

closeEditProfileBtn.addEventListener("click", () => {
  closeModal(profileEditModal);
});

/* -------------------------------------------------------------------------- */
/*                        // submit edit profile title and desc               */
/* -------------------------------------------------------------------------- */

profileEditModalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;

  console.log("submit");

  closeModal(profileEditModal);
});

/* -------------------------------------------------------------------------- */
/*                        // open add cards                                   */
/* -------------------------------------------------------------------------- */

cardAddButton.addEventListener("click", () => {
  openModal(cardAddModal);
});

/* -------------------------------------------------------------------------- */
/*                        // close add cards                                  */
/* -------------------------------------------------------------------------- */

cardAddCloseButton.addEventListener("click", () => {
  closeModal(cardAddModal);
});

/* -------------------------------------------------------------------------- */
/*                        // submit add cards                                 */
/* -------------------------------------------------------------------------- */

cardAddModalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.title.value;
  const link = e.target.link.value;
  const cardElement = getCardElement({
    name,
    link,
  });
  renderCard(cardElement, cardListEl);
  closeModal(cardAddModal);
});

/* -------------------------------------------------------------------------- */
/*                        // cards                                            */
/* -------------------------------------------------------------------------- */

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  renderCard(cardElement, cardListEl);
});

/* -------------------------------------------------------------------------- */
/*                        // like trash preview                                           */
/* -------------------------------------------------------------------------- */

cardImagePreviewCloseButton.addEventListener("click", () =>
  closeModal(cardImagePreviewModal)
);
