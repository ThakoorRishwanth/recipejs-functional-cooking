// -----------------------------
// Recipe Data
// -----------------------------
const recipes = [
  { id: 1, title: "Pizza", time: 45, difficulty: "easy", description: "Cheesy pizza" },
  { id: 2, title: "Chicken Curry", time: 70, difficulty: "hard", description: "Spicy curry" },
  { id: 3, title: "Salad", time: 20, difficulty: "easy", description: "Fresh salad" },
  { id: 4, title: "Veg Stir Fry", time: 30, difficulty: "medium", description: "Quick stir fry" },
  { id: 5, title: "Biryani", time: 90, difficulty: "hard", description: "Rice dish" },
  { id: 6, title: "Pasta", time: 35, difficulty: "medium", description: "Creamy pasta" },
  { id: 7, title: "Soup", time: 25, difficulty: "easy", description: "Hot soup" },
  { id: 8, title: "Rogan Josh", time: 80, difficulty: "hard", description: "Lamb curry" }
];

// -----------------------------
// DOM
// -----------------------------
const recipeContainer = document.getElementById("recipe-container");

// store current selection
let currentFilter = "all";
let currentSort = "";

// -----------------------------
// Create card
// -----------------------------
function createRecipeCard(recipe) {
  return `
    <div class="recipe-card">
      <h3>${recipe.title}</h3>
      <p>⏱️ ${recipe.time} min</p>
      <p>${recipe.difficulty}</p>
      <p>${recipe.description}</p>
    </div>
  `;
}

// -----------------------------
// Show recipes
// -----------------------------
function renderRecipes(list) {
  let html = "";

  for (let i = 0; i < list.length; i++) {
    html += createRecipeCard(list[i]);
  }

  recipeContainer.innerHTML = html;
}

// -----------------------------
// Filter recipes
// -----------------------------
function filterRecipes(list) {
  if (currentFilter === "easy") {
    return list.filter(r => r.difficulty === "easy");
  }

  if (currentFilter === "medium") {
    return list.filter(r => r.difficulty === "medium");
  }

  if (currentFilter === "hard") {
    return list.filter(r => r.difficulty === "hard");
  }

  if (currentFilter === "quick") {
    return list.filter(r => r.time < 30);
  }

  return list;
}

// -----------------------------
// Sort recipes
// -----------------------------
function sortRecipes(list) {
  if (currentSort === "name") {
    return list.slice().sort((a, b) => a.title > b.title ? 1 : -1);
  }

  if (currentSort === "time") {
    return list.slice().sort((a, b) => a.time - b.time);
  }

  return list;
}

// -----------------------------
// Main function
// -----------------------------
function updateDisplay() {
  let result = filterRecipes(recipes);
  result = sortRecipes(result);
  renderRecipes(result);
}

// -----------------------------
// Button clicks
// -----------------------------
const filterButtons = document.querySelectorAll("[data-filter]");
for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].onclick = function () {
    currentFilter = this.dataset.filter;
    updateDisplay();
  };
}

const sortButtons = document.querySelectorAll("[data-sort]");
for (let i = 0; i < sortButtons.length; i++) {
  sortButtons[i].onclick = function () {
    currentSort = this.dataset.sort;
    updateDisplay();
  };
}

// -----------------------------
// Start app
// -----------------------------
updateDisplay();
