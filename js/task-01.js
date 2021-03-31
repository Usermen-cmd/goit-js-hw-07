const categoriesRef = document.getElementById('categories');
const itemsRefs = document.querySelectorAll('.item');

const printCategoryQuantity = elementRef => {
  const childrenArrayRefs = elementRef.children;
  console.log(`В списке ${childrenArrayRefs.length} категории.`);
};

printCategoryQuantity(categoriesRef);

const printTitlesCountElements = arrayRefs => {
  arrayRefs.forEach(el =>
    console.log(
      `Категория: ${el.firstElementChild.textContent}\nКоличество элементов: ${el.lastElementChild.children.length}`,
    ),
  );
};

printTitlesCountElements(itemsRefs);
