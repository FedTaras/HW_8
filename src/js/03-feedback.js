import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

const inputData = {};
const STORAGE_KEY = 'feedback-form-state';
const storageData = localStorage.getItem(STORAGE_KEY);

refs.form.addEventListener('input', throttle(onFormMessage, 500));
refs.form.addEventListener('submit', onButtonSubmit);

loadPage();

function onFormMessage(ev) {
  inputData[ev.target.name] = ev.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(inputData));
}

function onButtonSubmit(ev) {
  ev.preventDefault();

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  localStorage.removeItem(STORAGE_KEY);
  ev.currentTarget.reset();
}

function loadPage() {
  if (localStorage.length) {
    if (!JSON.parse(storageData).email) {
      refs.email.value = '';
    } else {
      refs.email.value = JSON.parse(storageData).email;
    }
    if (!JSON.parse(storageData).message) {
      refs.message.value = '';
    } else {
      refs.message.value = JSON.parse(storageData).message;
    }
  }
}
// function inputDataFn(evt) {
//   evt.preventDefault();

//   const key = evt.target.name;
//   const keyValue = evt.target.value;

//   localObj[`${key}`] = keyValue;
//   const storageData = JSON.stringify(localObj);
//   localStorage.setItem(STORAGE_KEY, storageData);
//   console.log(localObj);
//   console.log(JSON.stringify(localObj));
// }

// function currentForm() {
//   // if (localStorage.length) {
//   if (localStorage.getItem(STORAGE_KEY)) {
//     console.log(555);
//     const obj = JSON.parse(localStorage.getItem(STORAGE_KEY));

//     formRef.elements.email.value = obj.email;
//     formRef.elements.message.value = obj.message;

//     // console.log(obj);
//   }
// }

// function clearFn(evt) {
//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }
