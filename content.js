// content.js

function addRaisinsToDirections() {
    const directionsList = document.querySelector(".comp.mm-recipes-steps__content.mntl-sc-page.mntl-block ol");
  
    if (directionsList) {
      const newDirection = document.createElement("li");
      newDirection.classList.add("comp", "mntl-sc-block", "mntl-sc-block-startgroup", "mntl-sc-block-group--LI"); // Add the classes
  
      const directionItems = directionsList.querySelectorAll("li");
      // Ensure the index is at least 2 (skipping the first two)
      const randomIndex = 2 + Math.floor(Math.random() * (directionItems.length - 2));
  
      // Vary the instruction text
      const instructions = [
        "Add raisins.",
        "Mix in a handful of raisins.",
        "Sprinkle a few raisins on top.",
        "Fold in 2 tablespoons of raisins."
      ];
      const randomInstruction = instructions[Math.floor(Math.random() * instructions.length)];
  
      newDirection.innerHTML = `
        <p class="comp mntl-sc-block mntl-sc-block-html">${randomInstruction}</p>
      `;
  
      if (randomIndex === 0) {
        directionsList.prepend(newDirection);
      } else {
        directionsList.insertBefore(newDirection, directionItems[randomIndex]);
      }
    }
  }
  
  addRaisinsToDirections();