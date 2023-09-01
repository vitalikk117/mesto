//Найдём нашу кнопку открытия модального окна
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

//Найдём модальное окно
const popupElement = document.querySelector('.popup');

//Кнопка закрытия модального окна
const popupCloseButtonElement = document.querySelector('.popup__close-btn');

//Найдём форму
const formElement = document.querySelector('.popup__form');

//выберите элементы куда должны быть вставлены значения полей
const profName= document.querySelector('.profile__title');
const profJob= document.querySelector('.profile__text');

//выбираем элементы куда будут вставлены значения полей для пользователя
const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__job');

//регистрируем обработчик события по клику на открытие окна popup
function openPopup() {
  popupElement.classList.add('popup_opened');
}

//вводим значение данных из профиля из карточки в всплывающее окно пользователя
function writeInputs() {
  nameInput.value = profName.textContent;
  jobInput.value = profJob.textContent;
  openPopup();
}

//обработчик на кнопку закрытия модального окна по клику на крестик кнопку
function closePopup() {
  popupElement.classList.remove('popup_opened');
}

//закрытие модального окна при клике на Overlay
function popupCloseOnOverlayClick(event) {
  //console.log('event', event);
  //console.log('target', event.target);
  //console.log('currentTarget', event.currentTarget);
  if (event.target === event.currentTarget) {closePopup();}
}
//Обработчик отправка формы, хотя пока она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); //эта строчка отменяет стандартную отправку формы
//вставляем  новые значения с помощью textContent в поля ввода popup
profName.textContent = nameInput.value;
profJob.textContent = jobInput.value;
}
//Прикрепляем обработчик к форме он будет следить за событием "Submit"
formElement.addEventListener('submit', handleFormSubmit);

popupElement.addEventListener ('click', popupCloseOnOverlayClick);
popupOpenButtonElement.addEventListener ('click', openPopup);
popupCloseButtonElement.addEventListener ('click', closePopup);