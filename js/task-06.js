const inputRef = document.querySelector('#validation-input');

const onValidInput = event => {
  const isValidLendth = Number(inputRef.dataset.length) <= event.currentTarget.value.length;
  const getCls = boolean => (boolean ? 'valid' : 'invalid');
  const cls = getCls(isValidLendth);
  const inverseCls = getCls(!isValidLendth);

  inputRef.classList.contains(inverseCls) ? inputRef.classList.remove(inverseCls) : 0;
  inputRef.classList.add(cls);
};

inputRef.addEventListener('change', onValidInput);
