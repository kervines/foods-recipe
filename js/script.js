async function fetchSpoonacular() {
  const fetchAPI = await (await fetch(urlAPI)).json();
  const response = fetchAPI;
  const {
    recipes: [dataRecipes],
  } = response;

  const { title, image, instructions, pricePerServing } = dataRecipes;
  createRecipeCard(image, title, instructions, pricePerServing);
  console.log(dataRecipes);
}
fetchSpoonacular();

function createRecipeCard(image, title, instructions, price) {
  const container = document.querySelector('.container-recipe');
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `<div class="image-recipe">
  <img src=${image} alt="${title}">
</div>
<div class="info-recipe">
  <h2>${title}</h2>
  <p>${instructions}</p>
  <a href="/">Mais informações</a>
</div>
<div class="btn-recipe">
  <button>$${price}</button>
</div>`;
  container.appendChild(card);
}
