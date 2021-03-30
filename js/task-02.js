const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const listRef = document.querySelector('#ingredients');

const createListItems = array => {
  return array.map(element => {
    let item = document.createElement('li');
    item.textContent = element;
    return item;
  });
};

const ingredientsNodes = createListItems(ingredients);

listRef.append(...ingredientsNodes);
