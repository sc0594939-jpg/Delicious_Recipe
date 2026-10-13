/* =========================
   RECIPE DATA
========================= */

const recipes = [
    {
        name: "Strawberry Bliss",
        category: "dessert",
        tag: "Dessert",
        time: "10 min",
        rating: "4.9",
        serves: "2",
        image: "image/strawberries-white-ceramic-cup.jpg",
        description:
            "Fresh strawberries with a simple creamy finish — a quick sweet treat for any time of day.",
        ingredients: [
            "Fresh strawberries",
            "Greek yogurt",
            "Honey",
            "Mint leaves"
        ]
    },

    {
        name: "Grilled Chicken & Bread",
        category: "dinner",
        tag: "Dinner",
        time: "35 min",
        rating: "4.8",
        serves: "3",
        image:
            "image/crilled-chicken-bread-piece-greens-pepper-sauce-spices-side-view.jpg",
        description:
            "Juicy grilled chicken served with toasted bread, greens and a creamy pepper sauce.",
        ingredients: [
            "Chicken breast",
            "Bread",
            "Mixed greens",
            "Pepper sauce",
            "Herbs"
        ]
    },

    {
        name: "Chicken Tikka Skewers",
        category: "dinner",
        tag: "Dinner",
        time: "30 min",
        rating: "4.9",
        serves: "4",
        image:
            "image/dolores-preciado-Vu_fjfasu-4-unsplash.jpg",
        description:
            "Tender, smoky chicken tikka with colorful vegetables and aromatic spices.",
        ingredients: [
            "Chicken",
            "Yogurt",
            "Tikka spices",
            "Bell pepper",
            "Onion"
        ]
    },

    {
        name: "Herb Chicken & Veggies",
        category: "healthy",
        tag: "Healthy",
        time: "40 min",
        rating: "4.7",
        serves: "3",
        image:
            "image/side-close-up-view-chicken-herbs-plate-chicken-legs-with-lemon-herbs-dark-background.jpg",
        description:
            "Herb-roasted chicken paired with fresh vegetables for a balanced dinner.",
        ingredients: [
            "Chicken legs",
            "Potatoes",
            "Green beans",
            "Rosemary",
            "Lemon"
        ]
    },

    {
        name: "Spicy Shrimp Noodles",
        category: "lunch",
        tag: "Lunch",
        time: "20 min",
        rating: "4.8",
        serves: "2",
        image:
            "image/olayinka-babalola-r01ZopTiEV8-unsplash.jpg",
        description:
            "Juicy shrimp tossed with spicy noodles and crunchy vegetables.",
        ingredients: [
            "Shrimp",
            "Noodles",
            "Carrot",
            "Bell pepper",
            "Chili sauce"
        ]
    },

    {
        name: "Grilled Lobster Platter",
        category: "dinner",
        tag: "Dinner",
        time: "45 min",
        rating: "4.9",
        serves: "2",
        image:
            "image/davide-cantelli-jpkfc5_d-DI-unsplash.jpg",
        description:
            "Tender grilled lobster served with fresh salad and a bright creamy dip.",
        ingredients: [
            "Lobster",
            "Lemon",
            "Mixed salad",
            "Garlic butter",
            "Herbs"
        ]
    },

    {
        name: "Grilled Pork Chop",
        category: "dinner",
        tag: "Dinner",
        time: "35 min",
        rating: "4.7",
        serves: "2",
        image:
            "image/alex-munsell-Yr4n8O_3UPc-unsplash.jpg",
        description:
            "A juicy grilled pork chop topped with seasoned vegetables and herbs.",
        ingredients: [
            "Pork chop",
            "Seasonal vegetables",
            "Garlic",
            "Thyme",
            "Olive oil"
        ]
    },

    {
        name: "Gourmet Garden Plate",
        category: "lunch",
        tag: "Lunch",
        time: "25 min",
        rating: "4.6",
        serves: "2",
        image:
            "image/jay-wennington-N_Y88TWmGwA-unsplash (1).jpg",
        description:
            "A colorful restaurant-style plate packed with textures and fresh flavors.",
        ingredients: [
            "Seasonal vegetables",
            "Rice",
            "Greens",
            "Sauce",
            "Fresh herbs"
        ]
    },

    {
        name: "Cheese Burger Delight",
        category: "lunch",
        tag: "Lunch",
        time: "25 min",
        rating: "4.8",
        serves: "2",
        image:
            "image/pexels-fox-58267-27831791.jpg",
        description:
            "Juicy burger with melted cheese, fresh vegetables and a toasted bun.",
        ingredients: [
            "Beef patty",
            "Cheddar",
            "Burger buns",
            "Lettuce",
            "Tomato"
        ]
    },

    {
        name: "Turkish Stuffed Eggplant",
        category: "dinner",
        tag: "Dinner",
        time: "50 min",
        rating: "4.9",
        serves: "4",
        image:
            "image/turkish-stuffed-eggplants-with-ground-beef-vegetables-baked-with-tomato-sauce (1).jpg",
        description:
            "Baked eggplant filled with seasoned meat and vegetables in a rich tomato sauce.",
        ingredients: [
            "Eggplant",
            "Minced meat",
            "Tomato",
            "Onion",
            "Spices"
        ]
    }
];


/* =========================
   DOM ELEMENTS
========================= */

const grid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const empty = document.getElementById("emptyState");

let activeCategory = "all";
let query = "";


/* =========================
   RENDER RECIPES
========================= */

function renderRecipes() {

    const filteredRecipes = recipes.filter((recipe) => {

        const categoryMatch =
            activeCategory === "all" ||
            recipe.category === activeCategory;

        const searchText = `
            ${recipe.name}
            ${recipe.tag}
            ${recipe.description}
        `.toLowerCase();

        const searchMatch =
            searchText.includes(query.toLowerCase());

        return categoryMatch && searchMatch;
    });


    resultCount.textContent =
        `${filteredRecipes.length} recipe${
            filteredRecipes.length !== 1 ? "s" : ""
        }`;


    if (filteredRecipes.length === 0) {

        empty.style.display = "block";
        grid.innerHTML = "";

        return;

    } else {

        empty.style.display = "none";

    }


    grid.innerHTML = filteredRecipes.map((recipe) => {

        const recipeIndex = recipes.indexOf(recipe);

        return `
            <article class="recipe-card">

                <div class="card-img">

                    <img
                        src="${recipe.image}"
                        alt="${recipe.name}"
                        loading="lazy"
                    >

                    <button
                        class="favorite"
                        aria-label="Save recipe"
                        data-index="${recipeIndex}"
                    >
                        ♡
                    </button>

                </div>


                <div class="card-body">

                    <span class="tag">
                        ${recipe.tag}
                    </span>

                    <h3>
                        ${recipe.name}
                    </h3>

                    <p>
                        ${recipe.description}
                    </p>


                    <div class="card-meta">

                        <span>
                            ⏱ ${recipe.time}
                            &nbsp;
                            ⭐ ${recipe.rating}
                        </span>


                        <button
                            class="view-btn"
                            data-index="${recipeIndex}"
                        >
                            View recipe →
                        </button>

                    </div>

                </div>

            </article>
        `;

    }).join("");


    addCardEvents();
}


/* =========================
   CARD EVENTS
========================= */

function addCardEvents() {

    const viewButtons =
        document.querySelectorAll(".view-btn");


    viewButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const index =
                Number(button.dataset.index);

            openRecipeModal(index);

        });

    });


    const favoriteButtons =
        document.querySelectorAll(".favorite");


    favoriteButtons.forEach((button) => {

        button.addEventListener("click", () => {

            button.classList.toggle("saved");


            if (button.classList.contains("saved")) {

                button.textContent = "♥";

                showToast("Recipe saved!");

            } else {

                button.textContent = "♡";

                showToast("Recipe removed!");

            }

        });

    });

}


/* =========================
   RECIPE MODAL
========================= */

function openRecipeModal(index) {

    const recipe = recipes[index];

    document.getElementById("modalImage").src =
        recipe.image;

    document.getElementById("modalImage").alt =
        recipe.name;

    document.getElementById("modalTag").textContent =
        recipe.tag;

    document.getElementById("modalTitle").textContent =
        recipe.name;

    document.getElementById("modalDescription").textContent =
        recipe.description;

    document.getElementById("modalTime").textContent =
        recipe.time;

    document.getElementById("modalRating").textContent =
        recipe.rating;

    document.getElementById("modalServes").textContent =
        recipe.serves;


    document.getElementById("modalIngredients").innerHTML =
        recipe.ingredients
            .map((ingredient) => {

                return `<li>${ingredient}</li>`;

            })
            .join("");


    const modal =
        document.getElementById("recipeModal");


    modal.classList.add("show");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow = "hidden";
}


/* =========================
   CLOSE MODAL
========================= */

function closeRecipeModal() {

    const modal =
        document.getElementById("recipeModal");


    modal.classList.remove("show");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow = "";
}


document
    .getElementById("modalClose")
    .addEventListener(
        "click",
        closeRecipeModal
    );


document
    .querySelector(".modal-backdrop")
    .addEventListener(
        "click",
        closeRecipeModal
    );


/* ESC KEY */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeRecipeModal();

    }

});


/* =========================
   CATEGORY FILTER
========================= */

const categoryButtons =
    document.querySelectorAll(".category");


categoryButtons.forEach((button) => {

    button.addEventListener("click", () => {

        categoryButtons.forEach((btn) => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        activeCategory =
            button.dataset.category;


        renderRecipes();


        document
            .getElementById("recipes")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* =========================
   SEARCH FORM
========================= */

const searchForm =
    document.getElementById("searchForm");


searchForm.addEventListener("submit", (event) => {

    event.preventDefault();

    query =
        searchInput.value.trim();


    renderRecipes();


    document
        .getElementById("recipes")
        .scrollIntoView({
            behavior: "smooth"
        });

});


/* =========================
   LIVE SEARCH
========================= */

searchInput.addEventListener("input", () => {

    query =
        searchInput.value.trim();

    renderRecipes();

});


/* =========================
   RESET SEARCH
========================= */

const resetSearch =
    document.getElementById("resetSearch");


resetSearch.addEventListener("click", () => {

    query = "";

    activeCategory = "all";

    searchInput.value = "";


    categoryButtons.forEach((button) => {

        button.classList.toggle(
            "active",
            button.dataset.category === "all"
        );

    });


    renderRecipes();

});


/* =========================
   MOBILE MENU
========================= */

const nav =
    document.getElementById("nav");

const menuToggle =
    document.getElementById("menuToggle");


menuToggle.addEventListener("click", () => {

    nav.classList.toggle("open");


    const isOpen =
        nav.classList.contains("open");


    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* CLOSE MENU AFTER CLICK */

document
    .querySelectorAll(".nav a")
    .forEach((link) => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


/* =========================
   DARK MODE
========================= */

const themeToggle =
    document.getElementById("themeToggle");


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    const darkMode =
        document.body.classList.contains("dark");


    localStorage.setItem(
        "darkMode",
        darkMode
    );

});


/* CHECK SAVED THEME */

if (
    localStorage.getItem("darkMode") === "true"
) {

    document.body.classList.add("dark");

}


/* =========================
   BACK TO TOP
========================= */

const toTop =
    document.getElementById("toTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 450) {

        toTop.classList.add("show");

    } else {

        toTop.classList.remove("show");

    }

});


toTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   TOAST MESSAGE
========================= */

function showToast(message) {

    const toast =
        document.getElementById("toast");


    toast.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(window.toastTimer);


    window.toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2200);

}


/* =========================
   NEWSLETTER
========================= */

const newsletterForm =
    document.getElementById("newsletterForm");


newsletterForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const email =
        document.getElementById("emailInput");


    if (email.checkValidity()) {

        showToast(
            "Thanks! You're subscribed to our recipes."
        );


        email.value = "";

    } else {

        showToast(
            "Please enter a valid email."
        );

    }

});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   INITIAL LOAD
========================= */

renderRecipes();