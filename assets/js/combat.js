class Character {
    constructor(name, initiative, movement) {
      this.name = name;
      this.initiative = initiative;
      this.movement = movement;
    }
  
    act() {
      console.log(`${this.name} is acting.`);
      // Perform actions based on the character's initiative
    }
  
    move(distance) {
      if (distance > this.movement) {
        console.log(`${this.name} cannot move that far in one turn.`);
      } else {
        console.log(`${this.name} moves ${distance} feet.`);
        // Update character's position
      }
    }
  }
  
  class Combat {
    constructor(characters) {
      this.characters = characters;
    }
  
    resolveInitiative() {
      this.characters.sort((a, b) => b.initiative - a.initiative);
      console.log("Initiative order:");
      this.characters.forEach((character, index) => {
        console.log(`${index + 1}. ${character.name}`);
      });
    }
  
    startTurn() {
      this.characters.forEach((character) => {
        character.act();
        // Reduce character's initiative for the turn
        character.initiative -= 1;
      });
    }
  }
  
  // Example usage
  const characters = [
    new Character("Warrior", 10, 30),
    new Character("Rogue", 12, 40),
    new Character("Mage", 8, 25),
  ];
  
  const combat = new Combat(characters);
  combat.resolveInitiative();
  combat.startTurn();
  
  