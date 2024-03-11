// Import necessary modules
import { rollDice } from './dice.js'; // Assuming we have a dice module for rolling

// Function to guide players through character creation
function createCharacter() {
    // Step 1: Roll for Attributes or input manually
    const attributes = {
        strength: rollOrInputAttribute('Strength'),
        dexterity: rollOrInputAttribute('Dexterity'),
        constitution: rollOrInputAttribute('Constitution'),
        intelligence: rollOrInputAttribute('Intelligence'),
        wisdom: rollOrInputAttribute('Wisdom'),
        charisma: rollOrInputAttribute('Charisma'),
        magic: rollOrInputAttribute('Magic'),
    };

    // Step 2: Select Skills, Specialties, and Effects
    const skills = selectSkills();
    const specialties = selectSpecialties(skills);
    const effects = selectEffects();

    // Step 3: Save Character Data
    saveCharacterData(attributes, skills, specialties, effects);
}

// Function to prompt for attribute roll or manual input
function rollOrInputAttribute(attribute) {
    const roll = rollDice(1, 20); // Roll a d20
    const manualInput = prompt(`Roll for ${attribute} or input value manually:`);
    return manualInput ? Number(manualInput) : roll;
}

// Function to select skills
function selectSkills() {
    // Logic to present skills to the player and allow selection
}

// Function to select specialties for chosen skills
function selectSpecialties(skills) {
    // Logic to present specialties based on selected skills and allow selection
}

// Function to select effects
function selectEffects() {
    // Logic to present effects to the player and allow selection
}

// Function to save character data
function saveCharacterData(attributes, skills, specialties, effects) {
    // Logic to compile character data and save it to a character sheet file
}

// Export the createCharacter function to make it accessible to other modules
export { createCharacter };
