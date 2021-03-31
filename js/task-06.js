const inputRef = document.querySelector('#validation-input');

const dataLength = inputRef.dataset.length;

const onValidInput = event => {
  const lendthValue = event.currentTarget.value.length;
  if (dataLength > lendthValue) {
    inputRef.classList.add('invalid');
  } else {
    inputRef.classList.add('valid');
  }
  if (inputRef.classList.contains('invalid') && inputRef.classList.contains('valid')) {
    inputRef.classList.remove('invalid');
    inputRef.classList.remove('valid');
  }
};

inputRef.addEventListener('change', onValidInput);
