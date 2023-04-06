import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

const { email, message } = form.elements;

populateMessage();

function onFormInput(event) {
  const formData = { email: email.value, message: message.value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('input', throttle(onFormInput, 500));

function populateMessage() {
  const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (storageData) {
    email.value = storageData.email;
    message.value = storageData.message;

    console.log(storageData);
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  if (email.value === '' || message.value === '') {
    return alert('всі поля повинні бути заповнені');
  }
  const userData = {
    email: email.value,
    message: message.value,
  };

  console.log(userData);

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

form.addEventListener('submit', onFormSubmit);
