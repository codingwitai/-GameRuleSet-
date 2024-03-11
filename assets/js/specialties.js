// specialties.js

// Define specialties module
const specialties = {
    // Define specialties object with default values
    list: [],

    // Function to add a specialty to the list
    addSpecialty(skillName, specialty) {
        const skillIndex = this.list.findIndex(skill => skill.name.toLowerCase() === skillName.toLowerCase());
        if (skillIndex !== -1) {
            if (!this.list[skillIndex].specialties) {
                this.list[skillIndex].specialties = [];
            }
            this.list[skillIndex].specialties.push(specialty);
        }
    },

    // Function to remove a specialty from the list
    removeSpecialty(skillName, specialty) {
        const skillIndex = this.list.findIndex(skill => skill.name.toLowerCase() === skillName.toLowerCase());
        if (skillIndex !== -1 && this.list[skillIndex].specialties) {
            this.list[skillIndex].specialties = this.list[skillIndex].specialties.filter(s => s.toLowerCase() !== specialty.toLowerCase());
        }
    },

    // Function to get specialties for a skill
    getSpecialties(skillName) {
        const skill = this.list.find(skill => skill.name.toLowerCase() === skillName.toLowerCase());
        return skill ? skill.specialties || [] : [];
    }
};

// Export specialties module
export default specialties;
