// main.js

import { Attribute } from './attribute.js';
import { calculateDerivedStatistics } from './derivedStatistics.js';

// Define effect class
class Effect {
    constructor(name, type, value) {
        this.name = name;
        this.type = type; // Attribute, Derived Stat, Skill, etc.
        this.value = value; // Effect value
    }
}

// Function to roll a d100
function rollD100() {
    return Math.floor(Math.random() * 100) + 1; // Roll a d100
}

// Function to calculate skill value for skill tests
function calculateSkillValue(attributePoints, skillPoints, specialtyPoints, modifiers) {
    // Combine attribute points, skill points, and specialty points
    const totalPoints = attributePoints + skillPoints + specialtyPoints;

    // Apply modifiers
    const modifiedPoints = totalPoints + modifiers;

    // Ensure skill value is within valid range (1-100)
    return Math.max(Math.min(modifiedPoints, 100), 1);
}

// Function to perform a skill test
function performSkillTest(skillValue, testType, targetValue) {
    // Roll a d100
    const diceResult = rollD100();

    // Calculate the margin between the result and the target number
    const margin = Math.abs(diceResult - targetValue);

    // Determine the test result based on the test type
    let testResult;
    if (testType === 'static') {
        // For static tests, the player aims to roll below their skill value
        testResult = diceResult <= skillValue;
    } else if (testType === 'opposed') {
        // For opposed tests, the player aims to roll higher than the opposing roll or target number
        testResult = diceResult + skillValue >= targetValue;
    } else {
        // Return false if test type is invalid
        return false;
    }

    // Calculate the degree of success or failure based on the margin between the result and the target number
    let degree;
    if (testResult) {
        if (margin <= 10) {
            degree = 'Critical Success';
        } else if (margin <= 20) {
            degree = 'Great Success';
        } else if (margin <= 30) {
            degree = 'Success';
        } else {
            degree = 'Partial Success';
        }
    } else {
        if (margin <= 10) {
            degree = 'Critical Failure';
        } else if (margin <= 20) {
            degree = 'Major Failure';
        } else if (margin <= 30) {
            degree = 'Failure';
        } else {
            degree = 'Partial Failure';
        }
    }

    // Return an object containing the test result and degree of success/failure
    return { result: testResult, degree: degree };
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

    // Retrieve selected skills and specialties
    const selectedSkills = [];
    const selectedSpecialties = {};

    const skillsCheckboxes = document.getElementsByName("skill");
    skillsCheckboxes.forEach(skillCheckbox => {
        if (skillCheckbox.checked) {
            const skillName = skillCheckbox.value;
            selectedSkills.push(skillName);

            const specialtyCheckboxes = document.getElementsByName(`${skillName}Specialty`);
            selectedSpecialties[skillName] = [];
            specialtyCheckboxes.forEach(specialtyCheckbox => {
                if (specialtyCheckbox.checked) {
                    selectedSpecialties[skillName].push(specialtyCheckbox.value);
                }
            });
        }
    });

    // Define effects for the character (for demonstration purposes)
    const effects = [
        new Effect("Strength Boost", "Attribute", 10), // Boosts Strength attribute by 10
        new Effect("Melee Combat Mastery", "Skill", 20), // Boosts Melee Combat skill by 20
        // Add more effects as needed
    ];

    // Apply effects to the character
    applyEffects({ attributes: [strength, agility, intelligence, constitution], skills: selectedSkills }, effects);

    // Calculate derived statistics
    const derivedStatistics = calculateDerivedStatistics([strength, agility, intelligence, constitution], selectedSkills);

    // Display character attributes, selected skills, selected specialties, and derived statistics (for demonstration purposes)
    console.log("Character Attributes:");
    console.log(strength);
    console.log(agility);
    console.log(intelligence);
    console.log(constitution);

    console.log("Selected Skills:");
    console.log(selectedSkills);

    console.log("Selected Specialties:");
    console.log(selectedSpecialties);

    console.log("Derived Statistics:");
    derivedStatistics.forEach(statistic => {
        console.log(`${statistic.name}: ${statistic.value}`);
    });

    // Perform a skill test (for demonstration purposes)
    const skillValue = calculateSkillValue(50, 30, 10, 5); // Example skill value calculation
    const testResult = performSkillTest(skillValue, 'static', 60); // Example static skill test with target value 60
    console.log("Skill Test Result:", testResult);
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
