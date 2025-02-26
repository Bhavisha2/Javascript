// Step 1: Personalized Greeting
let userName = prompt("Welcome to EatNow Café! Please enter your first name:");

// If the user does not enter a name, assign "Guest"
if (!userName.trim()) {
    userName = "Guest";
}

// Step 2: Welcome Message
alert(`Hello, ${userName}! Welcome to EatNow Café. We hope you enjoy our menu!`);

// Step 3: Display Menu Items in Console
let menu = ["Grilled Chicken", "Spaghetti Bolognese", "Vegetable Stir-Fry", "Beef Burger", "Caesar Salad"];

console.log("EatNow Café Menu:");
menu.forEach((dish, index) => {
    console.log(`${index + 1}. ${dish}`);
});

// Step 4: Adding a New Dish
let newDish = prompt("Would you like to suggest a new dish? Enter the dish name:");

// Validate input: Check if input is not empty and contains at least one non-whitespace character
if (newDish.trim()) {
    menu.push(newDish.trim()); // Add the new dish to the menu
    console.log("\nUpdated EatNow Café Menu:");
    menu.forEach((dish, index) => {
        console.log(`${index + 1}. ${dish}`);
    });
} else {
    console.log("No dish added. Please enter a valid dish name next time.");
}
