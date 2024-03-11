// attribute.js

// Define the Attribute class
class Attribute {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

// Stage 1: Basic Attributes
// These represent the most basic building blocks of every character.
// These numbers range from 1 to 100, unless the Game Master includes Racial FX.
// A 1 represents a complete lack of aptitude or handicap, while a 100 represents the pinnacle of human ability.
// It also represents what percentage of humans you have a better Attribute than.
//
// Regardless of the number of Basic Attributes the Game Master assigns, the starting number of points is 100.
// At each advance, the number of points is 10% of your total points at each Stage 1, 3, and 4.
// Any points not used in this stage have a multiplier applied and are used in Stage 2 or beyond.

// Define the basic attributes
const Strength = new Attribute("Strength (Str)", 50); // Example value
const Dexterity = new Attribute("Dexterity (Dex)", 50); // Example value
const Constitution = new Attribute("Constitution (Con)", 50); // Example value
const Intelligence = new Attribute("Intelligence (Int)", 50); // Example value
const Wisdom = new Attribute("Wisdom (Wis)", 50); // Example value
const Charisma = new Attribute("Charisma (Cha)", 50); // Example value
const Magic = new Attribute("Magic (Mag)", 50); // Example value

// Export the attributes
export { Charisma, Constitution, Dexterity, Intelligence, Magic, Strength, Wisdom };

