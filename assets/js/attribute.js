// attributes.js

// Define attributes module
const attributes = {
    // Define attributes object with default max values
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
    magic: 0,
    
    // Function to roll a d-100 for attribute value
    rollD100() {
        // Roll a random number between 1 and 100
        return Math.floor(Math.random() * 100) + 1;
    },

    // Function to set attribute value by rolling a d-100
    setAttributeByRoll(attributeName) {
        if (this.hasOwnProperty(attributeName.toLowerCase())) {
            this[attributeName.toLowerCase()] = this.rollD100();
            return true;
        }
        return false;
    }
};

// Export attributes module
export default attributes;
