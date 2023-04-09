import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (e) {
    const currentTimeSec = e.seconds;
    localStorage.setItem('videoplayer-current-time', currentTimeSec);
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .catch(function (error) {});
