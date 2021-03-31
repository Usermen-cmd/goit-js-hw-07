const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const onInputFocus = event => {
  outputRef.textContent = event.currentTarget.value;
  if (!outputRef.textContent) {
    outputRef.textContent = 'незнакомец';
  }
};

inputRef.addEventListener('input', onInputFocus);
