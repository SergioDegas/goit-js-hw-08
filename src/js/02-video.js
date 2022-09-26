import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  // console.log(localStorage);
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
}
currentTime()
function currentTime() {
  if (!localStorage.getItem(LOCALSTORAGE_KEY)) {
    return;
  }
  player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
};

