// attribute.js

export class Attribute {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    setValue(newValue) {
        this.value = Math.max(1, Math.min(100, newValue)); // Clamp the value between 1 and 100
    }
}
