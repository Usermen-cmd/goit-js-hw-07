const inputRef = document.querySelector('#validation-input');

const onValidInput = event => {
  const isValidLendth = Number(inputRef.dataset.length) <= event.currentTarget.value.length;
  const cls = isValidLendth ? 'valid' : 'invalid';
  const inverseCls = isValidLendth ? 'invalid' : 'valid';

  inputRef.classList.contains(inverseCls) ? inputRef.classList.remove(inverseCls) : 0;
  inputRef.classList.add(cls);
};

inputRef.addEventListener('change', onValidInput);
