// dice.js

// Function to roll a single d100
function rollD100() {
    return Math.floor(Math.random() * 100) + 1;
}

// Export the function to make it accessible to other modules
export { rollD100 };
