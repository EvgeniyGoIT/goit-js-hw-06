const ingredientsList = document.querySelector("#ingredients");

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elementsLi = ingredients.map((ingredient) => {
  const li = document.createElement("li");

  li.textContent = ingredient;
  li.classList.add("item");
  return li;
  })

  ingredientsList.append(...elementsLi);