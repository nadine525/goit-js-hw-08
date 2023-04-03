import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = 'videoplayer-current-time';
const savedCurrentTime = localStorage.getItem('currentTime');

const onPlay = function (timeupdate) {
  localStorage.setItem('currentTime', currentTime.seconds);
};

player.on('timeupdate', onPlay);

player
  .setCurrentTime(savedCurrentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
