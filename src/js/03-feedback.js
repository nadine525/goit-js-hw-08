import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const storageKey = 'feedback-form-state';

const { email, message } = form.elements;

populateMessage();

function onFormInput(event) {
  const formData = { email: email.value, message: message.value };
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();
}

form.addEventListener('submit', onFormSubmit);

function populateMessage() {
  const storageData = JSON.parse(localStorage.getItem(storageKey));

  if (storageData) {
    email.value = storageData.email;
    message.value = storageData.message;

    console.log(storageData);
  }
}
