// content.js

function addRaisinsToIngredients() {
    const ingredientsList = document.querySelector(".mm-recipes-structured-ingredients__list");
  
    if (ingredientsList) {
      const newIngredient = document.createElement("li");
      newIngredient.classList.add("mm-recipes-structured-ingredients__list-item");
      newIngredient.innerHTML = `
        <p>
          <span data-ingredient-quantity="true">1</span>
          <span data-ingredient-unit="true">cup</span>
          <span data-ingredient-name="true">raisins</span>
        </p>
      `;
  
      const ingredientItems = ingredientsList.querySelectorAll(".mm-recipes-structured-ingredients__list-item");
      const randomIndex = Math.floor(Math.random() * ingredientItems.length); // Get a random index
  
      if (randomIndex === 0) { // If it's the first item, append
        ingredientsList.prepend(newIngredient);
      } else {
        ingredientsList.insertBefore(newIngredient, ingredientItems[randomIndex]); // Insert before the random item
      }
    }
  }
  
  addRaisinsToIngredients();