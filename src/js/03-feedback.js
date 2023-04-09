import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEmailEl = document.querySelector("input[name='email']");
const textareaMessageEl = document.querySelector("textarea[name='message']");
const formDate = {};
const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onInput, 500));

returnedDates();

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInput(e) {
  formDate[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formDate));
}

function returnedDates() {
  const savedDate = localStorage.getItem(STORAGE_KEY);
  if (savedDate) {
    const parsedDate = JSON.parse(savedDate);
    inputEmailEl.value = parsedDate.email;
    textareaMessageEl.value = parsedDate.message;
  }
}
