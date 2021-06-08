// over all for each one
const inquirer = require("inquirer");

class employee {
    constructor(emName, id, email) {
        this.name = emName;
        this.id = id;
        this.email = email;
    }
    getName() {
        return `<h1>${this.name}</h1>`;
    }
    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = employee;