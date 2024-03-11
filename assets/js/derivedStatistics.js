// derivedStatistics.js

// Function to calculate derived statistics based on the basic attributes
function calculateDerivedStatistics(strength, dexterity, constitution, intelligence, wisdom, charisma, magic) {
    // Calculate Hit Points
    const hitPoints = calculateHitPoints(strength, constitution, wisdom);

    // Calculate Move
    const move = calculateMove(strength, dexterity, constitution);

    // Calculate Initiative
    const initiative = calculateInitiative(dexterity, intelligence);

    // Calculate Mana
    const mana = calculateMana(constitution, charisma, magic);

    // Calculate Fatigue
    const fatigue = calculateFatigue(constitution, wisdom);

    // Calculate Luck
    const luck = calculateLuck(strength, dexterity, constitution, intelligence, wisdom, charisma, magic);

    // Calculate Willpower
    const willpower = calculateWillpower(wisdom);

    // Calculate Fortitude
    const fortitude = calculateFortitude(constitution);

    // Calculate Reflexes
    const reflexes = calculateReflexes(dexterity);

    // Calculate Defense
    const defense = calculateDefense(intelligence, dexterity);

    // Calculate Physical Soak
    const physicalSoak = calculatePhysicalSoak(strength, constitution, wisdom);

    // Calculate Magical Soak
    const magicalSoak = calculateMagicalSoak(constitution, wisdom, magic);

    return {
        hitPoints,
        move,
        initiative,
        mana,
        fatigue,
        luck,
        willpower,
        fortitude,
        reflexes,
        defense,
        physicalSoak,
        magicalSoak
    };
}

// Function to calculate Hit Points
function calculateHitPoints(strength, constitution, wisdom) {
    return strength + constitution + wisdom;
}

// Function to calculate Move
function calculateMove(strength, dexterity, constitution) {
    return strength + dexterity + constitution;
}

// Function to calculate Initiative
function calculateInitiative(dexterity, intelligence) {
    return dexterity + intelligence;
}

// Function to calculate Mana
function calculateMana(constitution, charisma, magic) {
    return constitution + charisma + magic;
}

// Function to calculate Fatigue
function calculateFatigue(constitution, wisdom) {
    return constitution + wisdom;
}

// Function to calculate Luck
function calculateLuck(strength, dexterity, constitution, intelligence, wisdom, charisma, magic) {
    const totalBasicAttributes = strength + dexterity + constitution + intelligence + wisdom + charisma + magic;
    return Math.floor(totalBasicAttributes / 10);
}

// Function to calculate Willpower
function calculateWillpower(wisdom) {
    return wisdom + 20;
}

// Function to calculate Fortitude
function calculateFortitude(constitution) {
    return constitution + 20;
}

// Function to calculate Reflexes
function calculateReflexes(dexterity) {
    return dexterity + 20;
}

// Function to calculate Defense
function calculateDefense(intelligence, dexterity) {
    return intelligence + dexterity;
}

// Function to calculate Physical Soak
function calculatePhysicalSoak(strength, constitution, wisdom) {
    return Math.round((strength + constitution + wisdom) / 10);
}

// Function to calculate Magical Soak
function calculateMagicalSoak(constitution, wisdom, magic) {
    return Math.round((constitution + wisdom + magic) / 10);
}

// Export the function to make it accessible to other modules
export { calculateDerivedStatistics };
