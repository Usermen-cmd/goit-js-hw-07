const inputRef = document.querySelector('[type="number"]');
const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');
const containerForBoxesRef = document.querySelector('#boxes');

const maxValue = Number(inputRef.getAttribute('max'));

let currentBoxQuntity = 0;

const createBoxes = amount => {
  const arrayBoxes = [];

  for (let i = 0 + currentBoxQuntity; i < amount + currentBoxQuntity; i += 1) {
    if (amount + currentBoxQuntity > maxValue) {
      const boxElem = document.createElement('div');
      containerForBoxesRef.innerHTML = ` <p>Количество боксов не должно превышать 100 =(</p>
      <iframe width="421" height="409" src="https://www.youtube.com/embed/Mhuul8nsso0" title="YouTube video player"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>`;
      containerForBoxesRef.append(boxElem);
      return;
    }
    const boxElem = document.createElement('div');
    const rgbColors = Array.from('rgb').map(() => Math.floor(Math.random() * 255));

    const divStyles = `
    width: ${30 + i * 10}px;
    height: ${30 + i * 10}px;
    background-color: rgb(${rgbColors});
    margin-top: 10px`;

    boxElem.setAttribute('style', divStyles);
    arrayBoxes.push(boxElem);
    inputRef.value = '';
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
