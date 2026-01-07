// -----------------------------
// Recipe Data
// -----------------------------
const recipes = [
  {
    id: 1,
    title: "Classic Margherita Pizza",
    time: 45,
    difficulty: "easy",
    description: "A simple yet delicious pizza with fresh tomatoes, mozzarella, and basil.",
    category: "pasta"
  },
  {
    id: 2,
    title: "Spicy Chicken Curry",
    time: 70,
    difficulty: "hard",
    description: "A rich and spicy Indian-style chicken curry packed with flavor.",
    category: "curry"
  },
  {
    id: 3,
    title: "Caesar Salad",
    time: 20,
    difficulty: "easy",
    description: "Crisp romaine lettuce with creamy Caesar dressing and croutons.",
    category: "salad"
  },
  {
    id: 4,
    title: "Vegetable Stir Fry",
    time: 30,
    difficulty: "medium",
    description: "Colorful vegetables tossed in a savory Asian-style sauce.",
    category: "vegetarian"
  },
  {
    id: 5,
    title: "Beef Biryani",
    time: 90,
    difficulty: "hard",
    description: "A flavorful rice dish cooked with spices and tender beef.",
    category: "rice"
  },
  {
    id: 6,
    title: "Pasta Alfredo",
    time: 35,
    difficulty: "medium",
    description: "Creamy Alfredo pasta made with butter, cream, and parmesan.",
    category: "pasta"
  },
  {
    id: 7,
    title: "Tomato Soup",
    time: 25,
    difficulty: "easy",
    description: "A comforting bowl of classic tomato soup, smooth and rich.",
    category: "soup"
  },
  {
    id: 8,
    title: "Lamb Rogan Josh",
    time: 80,
    difficulty: "hard",
    description: "A traditional Kashmiri curry with tender lamb and aromatic spices.",
    category: "curry"
  }
];

// -----------------------------
// DOM Selection
// -----------------------------
const recipeContainer = document.querySelector("#recipe-container");

// -----------------------------
// Create Recipe Card
// -----------------------------
const createRecipeCard = (recipe) => {
  return `
    <div class="recipe-card" data-id="${recipe.id}">
      <h3>${recipe.title}</h3>
      <div class="recipe-meta">
        <span>⏱️ ${recipe.time} min</span>
        <span class="difficulty ${recipe.difficulty}">
          ${recipe.difficulty}
        </span>
      </div>
      <p>${recipe.description}</p>
    </div>
  `;
};

// -----------------------------
// Render Recipes
// -----------------------------
const renderRecipes = (recipeList) => {
  const recipesHTML = recipeList
    .map((recipe) => createRecipeCard(recipe))
    .join("");

  recipeContainer.innerHTML = recipesHTML;
};

// -----------------------------
// Initialize App
// -----------------------------
renderRecipes(recipes);
