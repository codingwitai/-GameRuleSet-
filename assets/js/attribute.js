// attributes.js

// Define attributes module
const attributes = {
    // Define attributes object with default values
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    magic: 10,
    
    // Function to get attribute value by name
    getAttributeValue(attributeName) {
        return this[attributeName.toLowerCase()] || null;
    },

    // Function to set attribute value by name
    setAttributeValue(attributeName, value) {
        if (this.hasOwnProperty(attributeName.toLowerCase())) {
            this[attributeName.toLowerCase()] = value;
            return true;
        }
        return false;
    }
};

// Export attributes module
export default attributes;
