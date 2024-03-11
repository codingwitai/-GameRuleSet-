// skills.js

// Define skills module
const skills = {
    // Define skills object with default values
    list: [],
    
    // Function to add a skill to the list
    addSkill(skill) {
        this.list.push(skill);
    },

    // Function to remove a skill from the list
    removeSkill(skillName) {
        this.list = this.list.filter(skill => skill.name.toLowerCase() !== skillName.toLowerCase());
    },

    // Function to get all skills
    getAllSkills() {
        return this.list;
    }
};

// Export skills module
export default skills;
