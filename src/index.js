window.addEventListener('keydown', playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`li[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keysList = [...document.querySelectorAll('.key')];
keysList.forEach(key => key.addEventListener('transitionend', removeTransform));

function removeTransform(e) {
  if (e.propertyName === 'transition') return;
  e.target.classList.remove('playing');
}

// FOR CLICK
const allAudioArr = [...document.querySelectorAll('audio')];

// This is where delegation «magic» happens
function selectKey(event) {
  if (
    event.target &&
    event.target.nodeName === 'KBD' &&
    event.target.nodeName !== 'LI'
  ) {
    console.log('List item ', event.target.textContent, ' was clicked!');
  }
  if (event.target.nodeName !== 'KBD' && event.target.nodeName !== 'LI') {
    console.log('NOT KBD OR LI');
    return;
  }
}

window.addEventListener('click', event => {
  selectKey(event);
  keysList.map(key => {
    key.addEventListener('click', () => {
      const randomAudio =
        allAudioArr[Math.floor(Math.random() * allAudioArr.length)];
      if (!randomAudio) return;

      key.classList.add('playing');
      randomAudio.currentTime = 0;
      randomAudio.play();

      if (key.propertyName === 'transition') return;
      key.classList.remove('playing');
    });
  });
});

// for future 😊

// const audiosrc = allAudioArr.map(audio => audio.currentSrc);
// //console.log(audiosrc);

// function getRandomAudio() {
//   return audiosrc[Math.floor(Math.random() * audiosrc.length)];
// }
// const randomAudiosrc = getRandomAudio();
// const src = (document.querySelectorAll('audio').src = `${randomAudiosrc}`);
// console.log(src);
