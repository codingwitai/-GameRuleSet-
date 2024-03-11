// Import the createCharacter function from the main.js file
import { createCharacter } from './main.js';

// Function to handle the "Create Character" button click event
function handleCreateCharacterButtonClick() {
    // Call the createCharacter function to create the character
    createCharacter();

    // Scroll to the character sheet section
    const characterSheet = document.getElementById("characterSheet");
    characterSheet.scrollIntoView({ behavior: "smooth" });
}

// Add an event listener to the "Create Character" button
const createCharacterButton = document.getElementById("createCharacterButton");
createCharacterButton.addEventListener("click", handleCreateCharacterButtonClick);
