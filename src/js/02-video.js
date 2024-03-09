// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// player
//   .setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')))
//   .then(function (seconds) {
//     seconds = 0;
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         break;
//     }
//   });

// const onPlay = function (evt) {
//   localStorage.setItem('videoplayer-current-time', JSON.stringify(evt.seconds));
// };

// player.on('timeupdate', throttle(onPlay, 1000));

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
  if (storageData) {
    refs.email.value = JSON.parse(storageData).email;
    refs.message.value = JSON.parse(storageData).message;
  }
}
