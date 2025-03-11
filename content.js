// content.js

function addRaisinsToIngredients() {
    const ingredientsList = document.querySelector(".mm-recipes-structured-ingredients__list"); // Target the <ul> element
  
    if (ingredientsList) {
      const newIngredient = document.createElement("li");
      newIngredient.classList.add("mm-recipes-structured-ingredients__list-item"); // Add the necessary class
  
      // Create the ingredient text with the appropriate spans
      newIngredient.innerHTML = `
        <p>
          <span data-ingredient-quantity="true">1</span>
          <span data-ingredient-unit="true">cup</span>
          <span data-ingredient-name="true">raisins</span>
        </p>
      `;
  
      ingredientsList.appendChild(newIngredient); // Append to the list
    }
  }
  
  addRaisinsToIngredients();