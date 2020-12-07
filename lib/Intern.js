//requiring the Employee class from the Employee.js file

const Employee = require('./Employee')

// Intern extends the Employee class to avoid having to reuse the "name, id, and email" from the employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)

        this.school = school
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern
