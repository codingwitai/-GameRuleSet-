// main.js

import { Attribute } from './attribute.js';
import { Skill, SubSkill } from './skills.js';

// Create attributes
const strength = new Attribute("Strength", 50);
const agility = new Attribute("Agility", 60);
const intelligence = new Attribute("Intelligence", 70);
const constitution = new Attribute("Constitution", 80); // Adding Constitution attribute

// Create skills and sub-skills
const meleeCombat = new Skill("Melee Combat");
const swordsmanship = new SubSkill("Swordsmanship");
const axemanship = new SubSkill("Axemanship");

meleeCombat.addSubSkill(swordsmanship);
meleeCombat.addSubSkill(axemanship);

const stealth = new Skill("Stealth");
const crafting = new Skill("Crafting");

// Display attributes, skills, and derived statistics
const attributesDiv = document.getElementById("attributes");

function displayAttribute(attribute) {
    const attributeElement = document.createElement("div");
    attributeElement.innerHTML = `<strong>${attribute.name}:</strong> <span id="${attribute.name.toLowerCase()}Value">${attribute.value}</span>`;
    attributesDiv.appendChild(attributeElement);
}

function displaySkills(skill) {
    const skillElement = document.createElement("div");
    skillElement.innerHTML = `<strong>${skill.name}:</strong>`;
    attributesDiv.appendChild(skillElement);

    if (skill.subSkills.length > 0) {
        const subSkillsList = document.createElement("ul");
        skill.subSkills.forEach(subSkill => {
            const subSkillItem = document.createElement("li");
            subSkillItem.textContent = subSkill.name;
            subSkillsList.appendChild(subSkillItem);
        });
        skillElement.appendChild(subSkillsList);
    }
}

export function displayAttributesSkillsAndDerivedStats() {
    displayAttribute(strength);
    displayAttribute(agility);
    displayAttribute(intelligence);
    displayAttribute(constitution); // Displaying the Constitution attribute

    displaySkills(meleeCombat);
    displaySkills(stealth);
    displaySkills(crafting);

    // Calculate and display derived statistics (not shown here)
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
