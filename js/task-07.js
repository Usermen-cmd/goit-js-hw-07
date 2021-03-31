const rangeRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

textRef.style.fontSize = '16px'; //Добавляет инлайновый стиль font-size

const currentFontSize = textRef.getAttribute('style');

const changeFont = () => {
  const factorFont = (Number(rangeRef.value) / 100) * 2; // Множитель, будет увеличивать или уменьшать шрифт на 0 - 100% от базового значения
  const valueFontSize = Number(currentFontSize.replace(/\D+/gi, ''));
  const fontSize = valueFontSize * factorFont;
  textRef.style.fontSize = `${fontSize}px`;
};

rangeRef.addEventListener('input', changeFont);
