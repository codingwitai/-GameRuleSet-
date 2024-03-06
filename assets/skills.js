// skills.js

export class Skill {
    constructor(name) {
        this.name = name;
        this.subSkills = [];
    }

    addSubSkill(subSkill) {
        this.subSkills.push(subSkill);
    }
}

export class SubSkill {
    constructor(name) {
        this.name = name;
    }
}
