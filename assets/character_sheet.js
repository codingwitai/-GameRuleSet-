// character_sheet.js

// Function to display the character sheet
function displayCharacterSheet(attributes) {
    const characterDetails = document.getElementById("characterDetails");
    characterDetails.style.display = "block";

    // Populate character details
    characterDetails.innerHTML = `
        <h2>Character Sheet</h2>
        <div class="section">
            <h3>Demographics</h3>
            <p>Name: ${attributes.name}</p>
            <p>Age: ${attributes.age}</p>
            <p>Sex/Gender: ${attributes.gender}</p>
            <p>Ethnicity: ${attributes.ethnicity}</p>
            <p>Occupation: ${attributes.occupation}</p>
            <p>Socioeconomic status: ${attributes.socioeconomicStatus}</p>
            <p>Education: ${attributes.education}</p>
            <p>Other notes: ${attributes.otherNotes}</p>
        </div>
        <div class="section">
            <!-- Other sections (Physical Appearance, History, Psychological Traits, etc.) -->
        </div>
    `;
}

// Export the function to make it accessible from other modules
export { displayCharacterSheet };
