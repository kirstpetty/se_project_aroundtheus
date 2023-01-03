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
/*                               // const and let                             */
/* -------------------------------------------------------------------------- */
const modal = document.querySelector(".modal");

const editProfileBtn = document.querySelector(".profile__edit-button");

const modalForm = document.querySelector(".modal__container");

const closeEditProfileBtn = document.querySelector(".modal__close-button");

const profileName = document.querySelector(".profile__title");

const profileDescription = document.querySelector(".profile__description");

const nameInput = document.querySelector(`.modal__input-name[name="name"]`);

const descriptionInput = document.querySelector(
  `.modal__input-description[name="description"]`
);

/* -------------------------------------------------------------------------- */
/*                               // open edit profile                         */
/* -------------------------------------------------------------------------- */

function addModalOpened(modal) {
  modal.classList.add("modal_opened");
}

editProfileBtn.addEventListener("click", function () {
  addModalOpened(modal);
});

/* -------------------------------------------------------------------------- */
/*                               // close edit profile                        */
/* -------------------------------------------------------------------------- */

function removeModalOpened(modal) {
  modal.classList.remove("modal_opened");
}

closeEditProfileBtn.addEventListener("click", function () {
  removeModalOpened(modal);
});

/* -------------------------------------------------------------------------- */
/*                               // edit profile title and desc               */
/* -------------------------------------------------------------------------- */
