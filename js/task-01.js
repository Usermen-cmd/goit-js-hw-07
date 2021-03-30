const categoriesRef = document.getElementById('categories');
const itemsRefs = document.querySelectorAll('.item');

const printCategoryQuantity = elementRef => {
  const childrenArrayRefs = elementRef.children;
  console.log(`В списке ${childrenArrayRefs.length} категории.`);
};

printCategoryQuantity(categoriesRef);

const printTitlesCountElements = arrayRefs => {
  for (let i = 0; i < arrayRefs.length; i += 1) {
    let title = arrayRefs[i].firstElementChild.textContent;
    let quntity = arrayRefs[i].lastElementChild.children.length;
    console.log(`Категория: ${title}\nКоличество элементов: ${quntity}`);
  }
};

printTitlesCountElements(itemsRefs);
