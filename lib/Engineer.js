//requiring the Employee class from the Employee.js file

const Employee = require('./Employee')

// Engineer extends the Employee class to avoid having to reuse the "name, id, and email" from the employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)

        this.github = github
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer