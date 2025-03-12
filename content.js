// content.js

function addRaisinsToIngredients() {
    const ingredientsList = document.querySelector(".mm-recipes-structured-ingredients__list");
  
    if (ingredientsList) {
      const newIngredient = document.createElement("li");
      newIngredient.classList.add("mm-recipes-structured-ingredients__list-item");
  
      const quantities = ["1 cup", "a handful of", "a few", "2 tablespoons", "a sprinkle of", "a dash of"];
      const randomQuantity = quantities[Math.floor(Math.random() * quantities.length)];
  
      newIngredient.innerHTML = `
        <p>
          <span data-ingredient-quantity="true">${randomQuantity}</span>
          <span data-ingredient-name="true">raisins</span>
        </p>
      `;
  
      const ingredientItems = ingredientsList.querySelectorAll(".mm-recipes-structured-ingredients__list-item");
      const randomIndex = Math.floor(Math.random() * ingredientItems.length);
  
      if (randomIndex === 0) {
        ingredientsList.prepend(newIngredient);
      } else {
        ingredientsList.insertBefore(newIngredient, ingredientItems[randomIndex]);
      }
    }
  }
  
  addRaisinsToIngredients();