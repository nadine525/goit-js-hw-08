import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const { email, message } = form.elements;

const storageKey = 'feedback-form-state';
let storageData = JSON.parse(localStorage.getItem(storageKey));

function onFormInput(event) {
  storageData = { email: email.value, message: message.value };
  localStorage.setItem('storageKey', JSON.stringify(storageData));
}

if (storageData) {
  email.value = storageData.email;
}

form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(event) {
  event.preventDefault();
  localStorage.clear();

  const { email, message } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('всі поля повинні бути заповнені');
  }

  console.log(storageData);

  event.currentTarget.reset();
  //   console.log(localStorage);
}

form.addEventListener('submit', onFormSubmit);
