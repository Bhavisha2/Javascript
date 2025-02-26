// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Step 1: Personalized Greeting
    let userName = prompt("Welcome to EatNow Café! Please enter your first name:");

    // If the user does not enter a name, assign "Guest"
    if (!userName || !userName.trim()) {
        userName = "Guest";
    }

    // Step 2: Welcome Message
    alert(`Hello, ${userName}! Welcome to EatNow Café. We hope you enjoy our menu!`);

    // Step 3: Display Menu Items on the Webpage
    let menu = ["Grilled Chicken", "Spaghetti Bolognese", "Vegetable Stir-Fry", "Beef Burger", "Caesar Salad"];
    let menuList = document.getElementById("menu-list");
    let addDishBtn = document.getElementById("add-dish-btn");

    if (!menuList || !addDishBtn) {
        console.error("Menu list or button not found. Check your HTML file.");
        return;
    }

    // Function to display menu items
    function displayMenu() {
        menuList.innerHTML = ""; // Clear previous items
        menu.forEach((dish, index) => {
            let listItem = document.createElement("li");
            listItem.textContent = `${index + 1}. ${dish}`;
            menuList.appendChild(listItem);
        });
    }

    // Initial menu display
    displayMenu();

    // Step 4: Adding a New Dish
    addDishBtn.addEventListener("click", function () {
        let newDish = prompt("Would you like to suggest a new dish? Enter the dish name:");

        if (newDish && newDish.trim()) {
            menu.push(newDish.trim()); // Add the new dish
            displayMenu(); // Refresh menu on page
        } else {
            alert("No dish added. Please enter a valid dish name.");
        }
    });
});
