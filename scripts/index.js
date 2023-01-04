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
const profileContainer = document.querySelector(".profile__info");

const editProfileBtn = document.querySelector("#profile-edit-button");

const profileModal = document.querySelector("#edit-modal");

const profileEditModalForm = profileModal.querySelector(
  "#profile-modal-container"
);

const closeEditProfileBtn = profileModal.querySelector(".modal__close-button");

const saveEditProfileBtn = profileModal.querySelector(".modal__save-button");

const profileName = profileContainer.querySelector(".profile__title");

const profileDescription = profileContainer.querySelector(
  ".profile__description"
);

const nameInput = profileEditModalForm.querySelector(
  `.modal__input-name[name="name"]`
);

const descriptionInput = profileEditModalForm.querySelector(
  `.modal__input-description[name="description"]`
);

/* -------------------------------------------------------------------------- */
/*                               // open edit profile                         */
/* -------------------------------------------------------------------------- */
function openProfileModal() {
  profileModal.classList.add("modal_opened");
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
}

editProfileBtn.addEventListener("click", openProfileModal);

/* -------------------------------------------------------------------------- */
/*                               // close edit profile                        */
/* -------------------------------------------------------------------------- */

function closeProfileModal() {
  profileModal.classList.remove("modal_opened");
}

closeEditProfileBtn.addEventListener("click", closeProfileModal);

/* -------------------------------------------------------------------------- */
/*                               // edit profile title and desc               */
/* -------------------------------------------------------------------------- */
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
}
