const inputRef = document.querySelector('[type="number"]');
const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');
const containerForBoxesRef = document.querySelector('#boxes');

let currentBoxQuntity = 0;

const createBoxes = amount => {
  const array = [];
  for (let i = 1 + currentBoxQuntity; i <= amount + currentBoxQuntity; i += 1) {
    const div = document.createElement('div');
    const divStyles = `width: ${30 + i * 10}px; height: ${30 + i * 10}px; background-color: red; margin-top: 10px`;
    div.setAttribute('style', divStyles);
    array.push(div);
  }
  containerForBoxesRef.append(...array);
  currentBoxQuntity += array.length;
};

const onRenderBtnClick = () => {
  const inputValue = Number(inputRef.value);
  createBoxes(inputValue);
};

const onDestroyBtnClick = () => {
  containerForBoxesRef.innerHTML = '';
  currentBoxQuntity = 0;
};
renderBtnRef.addEventListener('click', onRenderBtnClick);
destroyBtnRef.addEventListener('click', onDestroyBtnClick);
