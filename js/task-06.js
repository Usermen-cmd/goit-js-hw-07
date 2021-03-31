const inputRef = document.querySelector('#validation-input');

const dataLength = inputRef.dataset.length;

const onValidInput = event => {
  const lendthValue = event.currentTarget.value.length;
  const isValidLendth = dataLength <= lendthValue;
  if (isValidLendth) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
    return;
  }
  inputRef.classList.add('invalid');
  inputRef.classList.remove('valid');
};

inputRef.addEventListener('change', onValidInput);
