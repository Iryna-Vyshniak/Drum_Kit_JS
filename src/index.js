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
console.log(keysList);
keysList.forEach(key => key.addEventListener('transitionend', removeTransform));

function removeTransform(e) {
  if (e.propertyName === 'transition') return;
  e.target.classList.remove('playing');
}

// FOR CLICK
const allAudioArr = [...document.querySelectorAll('audio')];
console.log(allAudioArr);

// const audiosrc = allAudioArr.map(audio => audio.currentSrc);
// //console.log(audiosrc);

// function getRandomAudio() {
//   return audiosrc[Math.floor(Math.random() * audiosrc.length)];
// }
// const randomAudiosrc = getRandomAudio();
// const src = (document.querySelectorAll('audio').src = `${randomAudiosrc}`);
// console.log(src);

// const listItems = [...document.querySelectorAll('li')];
// console.log(listItems);
// listItems.forEach(item =>
//   item.addEventListener('transitionend', removeTransform)
// );

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

const randomAudio = allAudioArr[Math.floor(Math.random() * allAudioArr.length)];
console.log(randomAudio);

window.addEventListener('click', event => {
  selectKey(event);
  keysList.map(item => {
    item.addEventListener('click', () => {
      // const audio = randomAudio;
      // console.log(audio);
      if (!randomAudio) return;

      item.classList.add('playing');
      randomAudio.currentTime = 0;
      randomAudio.play();
      //console.log(item);
      if (item.propertyName === 'transition') return;
      item.classList.remove('playing');
    });
  });
});
