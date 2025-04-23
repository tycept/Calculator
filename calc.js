const screen = document.getElementById('screen');
const keys = document.getElementById('keys');
const buttons = keys.querySelectorAll('button');
const funAnswers = ['i think its a car', 'i think its a carrot😬', 'its red', 'LSTER🤓', '20 feet😎', 'sigma🥶', '010😱', 'idk😭'];

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.blur(); // remove focus to avoid flicker
    const val = btn.textContent;

    if (val === 'C') {
      screen.value = '';
    } else if (val === '=') {
      if (screen.value.trim() === '') return;
      showFunnyAnswer();
    } else {
      screen.value += val + ' ';
    }
  });
});

function showFunnyAnswer() {
  keys.classList.add('disabled');
  const randomText = `${funAnswers[Math.floor(Math.random() * funAnswers.length)]}`;
  let i = 0;
  screen.value = '';

  const typeInterval = setInterval(() => {
    screen.value += randomText.charAt(i);
    i++;    
    if (i > randomText.length) {
      clearInterval(typeInterval);
      setTimeout(() => {
        screen.value = '';
        keys.classList.remove('disabled');
      }, 3000);
    }
  }, 45);
  }
