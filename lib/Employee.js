class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }

// return methods for the employee information
    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getRole() {
        return Employee
    }

    getEmail() {
        return this.email
    }
        
}

module.exports = Employee