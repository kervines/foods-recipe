export default function initFetch() {
  const keyAPI = '98a3d2b0a15e4670aacfd718a3daa86a';
  const urlAPI = `https://api.spoonacular.com/recipes/random/?apiKey=${keyAPI}`;

  async function fetchSpoonacular() {
    const fetchAPI = await (await fetch(urlAPI)).json();
    const response = fetchAPI;
    const {
      recipes: [dataRecipes],
    } = response;

    const { title, image, instructions, pricePerServing, summary } =
      dataRecipes;
    createRecipeCard(image, title, instructions, pricePerServing);
  }

  for (let i = 0; i < 4; i++) {
    // fetchSpoonacular();
  }

  function createRecipeCard(image, title, instructions, price) {
    console.log(instructions);
    const container = document.querySelector('.cards-container');
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<div class="image-recipe">
  <img src=${
    image ||
    'https://iseb3.com.br/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'
  } alt="${title}">
  </div>
  <div class="info-recipe">
            <h2>${title}</h2>
            <div class="description">
            ${instructions}
            </div>
            <a href="#">Mais informações</a>
            <button class="">R$ ${price}</button>
            </div>`;
    container.appendChild(card);
  }
}
