const inputRef = document.querySelector('#validation-input');

const onValidInput = event => {
  const dataLength = Number(inputRef.dataset.length);
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
