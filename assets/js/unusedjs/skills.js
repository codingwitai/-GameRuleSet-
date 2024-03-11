// skills.js

class Skill {
    constructor(name) {
        this.name = name;
        this.subSkills = [];
    }

    addSubSkill(subSkill) {
        this.subSkills.push(subSkill);
    }
}

class SubSkill {
    constructor(name) {
        this.name = name;
    }
}

class Specialty {
    constructor(name) {
        this.name = name;
    }
}

// Export the Skill, SubSkill, and Specialty classes
export { Skill, Specialty, SubSkill };

