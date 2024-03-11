// effects.js

// Define effects module
const effects = {
    // Define effects object with default values
    list: [],

    // Function to add an effect to the list
    addEffect(skillName, effect) {
        const skillIndex = this.list.findIndex(skill => skill.name.toLowerCase() === skillName.toLowerCase());
        if (skillIndex !== -1) {
            if (!this.list[skillIndex].effects) {
                this.list[skillIndex].effects = [];
            }
            this.list[skillIndex].effects.push(effect);
        }
    },

    // Function to remove an effect from the list
    removeEffect(skillName, effect) {
        const skillIndex = this.list.findIndex(skill => skill.name.toLowerCase() === skillName.toLowerCase());
        if (skillIndex !== -1 && this.list[skillIndex].effects) {
            this.list[skillIndex].effects = this.list[skillIndex].effects.filter(e => e.toLowerCase() !== effect.toLowerCase());
        }
    },

    // Function to get effects for a skill
    getEffects(skillName) {
        const skill = this.list.find(skill => skill.name.toLowerCase() === skillName.toLowerCase());
        return skill ? skill.effects || [] : [];
    }
};

// Export effects module
export default effects;
