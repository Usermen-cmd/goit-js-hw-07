const buttonsRef = document.querySelectorAll('[data-action]');
const counterRef = document.querySelector('#value');

let counterValue = Number(counterRef.textContent);

const increment = () => (counterValue += 1);

const decrement = () => (counterValue -= 1);

const onBtnClick = event => {
  const isIncrementBtnClick = event.currentTarget.textContent === buttonsRef[1].textContent;
  counterRef.textContent = isIncrementBtnClick ? increment() : decrement();
};

buttonsRef.forEach(button => button.addEventListener('click', onBtnClick));
