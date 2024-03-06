// derivedStatistics.js

export function calculateHealthPoints(constitution) {
    // For simplicity, let's say health points are directly proportional to constitution
    return Math.floor(constitution / 2);
}

export function calculateAttackPower(strength) {
    // For simplicity, let's say attack power is directly proportional to strength
    return strength * 2;
}

// Add more functions to calculate other derived statistics as needed
