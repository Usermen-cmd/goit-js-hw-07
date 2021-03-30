const incrementBtnRef = document.querySelector('[data-action="increment"]');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const counterRef = document.querySelector('#value');

let counterValue = 0;

const increment = () => (counterValue += 1);

const decrement = () => (counterValue -= 1);

const onBtnClick = event => {
  const isIncrementBtnClick = event.target.textContent === incrementBtnRef.textContent;
  counterRef.textContent = isIncrementBtnClick ? increment() : decrement();
};

const operationsButton = [incrementBtnRef, decrementBtnRef];
operationsButton.forEach(button => button.addEventListener('click', onBtnClick));
