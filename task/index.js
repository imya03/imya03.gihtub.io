const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');


const createTimerAnimator = () => {
  let timerInterval

  return (seconds) => {
    clearInterval(timerInterval)
    let currentSeconds = seconds

     timerInterval = setInterval(() => {
      currentSeconds = currentSeconds !== 0 ? currentSeconds - 1 : 0
      timerEl.textContent = textTime(currentSeconds)
    }, 1000)
  };
};

const textTime = (seconds) => {
  return [
    Math.floor(seconds / 3600).toString().padStart(2, '0'),  // hours
    Math.floor((seconds % 3600) / 60).toString().padStart(2, '0'), // minutes
    Math.floor(seconds % 60).toString().padStart(2, '0') // seconds
  ].join(':')
}

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/[^0-9]/g, ''); // очищаются все символы кроме цифр
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
