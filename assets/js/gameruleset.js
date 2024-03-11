// GameRuleSet.js

// Import attributes module
import attributes from './attributes.js';

// Import derived statistics module
import derivedStatistics from './derived_statistics.js';

// Import skills module
import skills from './skills.js';

// Import specialties module
import specialties from './specialties.js';

// Import effects module
import effects from './effects.js';

// Import skill tests module
import skillTests from './skill_tests.js';

// Define GameRuleSet module
const GameRuleSet = {
    // Attributes
    attributes,

    // Derived Statistics
    derivedStatistics,

    // Skills
    skills,

    // Specialties
    specialties,

    // Effects (FX)
    effects,

    // Skill Tests
    skillTests
};

// Export GameRuleSet module
export default GameRuleSet;
