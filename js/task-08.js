const inputRef = document.querySelector('[type="number"]');
const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');
const containerForBoxesRef = document.querySelector('#boxes');

let currentBoxQuntity = 0;

const createBoxes = amount => {
  const arrayBoxes = [];

  for (let i = 0 + currentBoxQuntity; i <= amount - 1 + currentBoxQuntity; i += 1) {
    const boxElem = document.createElement('div');
    const rgbColors = Array.from('rgb').map(() => Math.floor(Math.random() * 255));

    const divStyles = `
    width: ${30 + i * 10}px;
    height: ${30 + i * 10}px;
    background-color: rgb(${rgbColors});
    margin-top: 10px`;

    boxElem.setAttribute('style', divStyles);
    arrayBoxes.push(boxElem);
  }

  containerForBoxesRef.append(...arrayBoxes);
  currentBoxQuntity += arrayBoxes.length;
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
