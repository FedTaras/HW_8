import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player
  .setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')))
  .then(function (seconds) {
    seconds = 0;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
    }
  });

const onPlay = function (evt) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(evt.seconds));
};

player.on('timeupdate', throttle(onPlay, 1000));
