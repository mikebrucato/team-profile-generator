//requiring the Employee class from the Employee.js file

const Employee = require('./Employee')

// Manager extends the Employee class to avoid having to reuse the "name, id, and email" from the employee class
class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)

        this.officeNum = officeNum
    }

    getOfficeNum() {
        return this.officeNum
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager
