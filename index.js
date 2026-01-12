// IIFE START
(function () {

  console.log("RecipeApp initializing...");

  // -----------------------------
  // Recipe Data
  // -----------------------------
  const recipes = [
    {
      id: 1,
      title: "Pizza",
      time: 45,
      difficulty: "easy",
      description: "Cheesy pizza",
      ingredients: ["Flour", "Cheese", "Tomato"],
      steps: [
        "Make dough",
        {
          text: "Prepare toppings",
          substeps: ["Cut vegetables", "Grate cheese"]
        },
        "Bake pizza"
      ]
    },
    {
      id: 2,
      title: "Chicken Curry",
      time: 70,
      difficulty: "hard",
      description: "Spicy curry",
      ingredients: ["Chicken", "Onion", "Spices"],
      steps: [
        "Heat oil",
        {
          text: "Cook chicken",
          substeps: [
            "Add chicken",
            {
              text: "Add spices",
              substeps: ["Chili", "Masala"]
            }
          ]
        },
        "Simmer curry"
      ]
    }
  ];

  // -----------------------------
  // State
  // -----------------------------
  let currentFilter = "all";
  let currentSort = "";

  const container = document.getElementById("recipe-container");

  // -----------------------------
  // RECURSION: render steps
  // -----------------------------
  function renderSteps(steps) {
    let html = "<ul>";

    for (let i = 0; i < steps.length; i++) {
      if (typeof steps[i] === "string") {
        html += "<li>" + steps[i] + "</li>";
      } else {
        html += "<li>" + steps[i].text;
        html += renderSteps(steps[i].substeps); // recursion
        html += "</li>";
      }
    }

    html += "</ul>";
    return html;
  }

  // -----------------------------
  // Create Recipe Card
  // -----------------------------
  function createCard(recipe) {
    return `
      <div class="recipe-card" data-id="${recipe.id}">
        <h3>${recipe.title}</h3>
        <p>${recipe.time} min</p>
        <p>${recipe.description}</p>

        <button class="steps-btn">Show Steps</button>
        <button class="ingredients-btn">Show Ingredients</button>

        <div class="steps hidden">
          ${renderSteps(recipe.steps)}
        </div>

        <div class="ingredients hidden">
          <ul>
            ${recipe.ingredients.map(function (i) {
              return "<li>" + i + "</li>";
            }).join("")}
          </ul>
        </div>
      </div>
    `;
  }

  // -----------------------------
  // Render Recipes
  // -----------------------------
  function render(list) {
    let html = "";

    for (let i = 0; i < list.length; i++) {
      html += createCard(list[i]);
    }

    container.innerHTML = html;
  }

  // -----------------------------
  // Filter + Sort
  // -----------------------------
  function updateDisplay() {
    let list = recipes;

    if (currentFilter !== "all") {
      list = list.filter(function (r) {
        if (currentFilter === "quick") {
          return r.time < 30;
        }
        return r.difficulty === currentFilter;
      });
    }

    if (currentSort === "name") {
      list = list.slice().sort(function (a, b) {
        return a.title > b.title ? 1 : -1;
      });
    }

    if (currentSort === "time") {
      list = list.slice().sort(function (a, b) {
        return a.time - b.time;
      });
    }

    render(list);
  }

  // -----------------------------
  // Event Delegation (VERY SIMPLE)
  // -----------------------------
  container.onclick = function (e) {
    if (e.target.className === "steps-btn") {
      e.target.nextElementSibling.classList.toggle("hidden");
    }

    if (e.target.className === "ingredients-btn") {
      e.target.nextElementSibling.nextElementSibling.classList.toggle("hidden");
    }
  };

  // -----------------------------
  // Filter buttons
  // -----------------------------
  document.querySelectorAll("[data-filter]").forEach(function (btn) {
    btn.onclick = function () {
      currentFilter = btn.dataset.filter;
      updateDisplay();
    };
  });

  // -----------------------------
  // Sort buttons
  // -----------------------------
  document.querySelectorAll("[data-sort]").forEach(function (btn) {
    btn.onclick = function () {
      currentSort = btn.dataset.sort;
      updateDisplay();
    };
  });

  // -----------------------------
  // Init
  // -----------------------------
  updateDisplay();
  console.log("RecipeApp ready!");

})(); 
// IIFE END
