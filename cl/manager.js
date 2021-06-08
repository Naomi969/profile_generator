const employee = require('./employee');

class manager extends employee{
    constructor(emName, id, email, officeNumber){
        super(emName, id, email);
        this.officeNumber = officeNumber
    }
    getRole() {
        return 'manager'
    }
    getOfficeNum() {
        return this.officeNumber
    }
}

module.exports = manager