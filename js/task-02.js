const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')

const elements = ingredients.map(ingredient => {
  const itemEl = document.createElement("li");

  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  console.log(itemEl);
  return itemEl
}
)

console.log(elements)

list.append(...elements)

