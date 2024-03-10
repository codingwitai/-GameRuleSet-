// main.js

import { Attribute } from './attribute.js';
import { calculateDerivedStatistics } from './derivedStatistics.js';

// Function to roll a dice
function rollDice(attribute) {
    const diceResult = Math.floor(Math.random() * 100) + 1; // Roll a d100
    document.getElementById(attribute).value = diceResult;
}

// Function to create a character based on user inputs
function createCharacter() {
    // Retrieve attribute values from user inputs
    const strengthValue = parseInt(document.getElementById("strength").value);
    const agilityValue = parseInt(document.getElementById("agility").value);
    const intelligenceValue = parseInt(document.getElementById("intelligence").value);
    const constitutionValue = parseInt(document.getElementById("constitution").value);

    // Create attribute objects
    const strength = new Attribute("Strength", strengthValue);
    const agility = new Attribute("Agility", agilityValue);
    const intelligence = new Attribute("Intelligence", intelligenceValue);
    const constitution = new Attribute("Constitution", constitutionValue);

    // Retrieve selected skills
    const selectedSkills = [];
    const skillsCheckboxes = document.getElementsByName("skill");
    skillsCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedSkills.push(checkbox.value);
        }
    });

    // Calculate derived statistics
    const derivedStatistics = calculateDerivedStatistics([strength, agility, intelligence, constitution], selectedSkills);

    // Display character attributes, selected skills, and derived statistics (for demonstration)
    console.log("Character Attributes:");
    console.log(strength);
    console.log(agility);
    console.log(intelligence);
    console.log(constitution);

    console.log("Selected Skills:");
    console.log(selectedSkills);

    console.log("Derived Statistics:");
    derivedStatistics.forEach(statistic => {
        console.log(`${statistic.name}: ${statistic.value}`);
    });
}

// Update attribute values
const form = document.getElementById("attributeForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    strength.setValue(parseInt(document.getElementById("strengthInput").value));
    agility.setValue(parseInt(document.getElementById("agilityInput").value));
    intelligence.setValue(parseInt(document.getElementById("intelligenceInput").value));
    constitution.setValue(parseInt(document.getElementById("constitutionInput").value)); // Update Constitution value

    // Update displayed attribute values
    document.getElementById("strengthValue").textContent = strength.value;
    document.getElementById("agilityValue").textContent = agility.value;
    document.getElementById("intelligenceValue").textContent = intelligence.value;
    document.getElementById("constitutionValue").textContent = constitution.value;

    // Update displayed derived statistics (not shown here)
});

// Export the createCharacter function to make it accessible to other modules
export { createCharacter };
