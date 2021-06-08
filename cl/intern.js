const employee = require('./employee')

class intern extends employee{
    constructor(emName, id, email, school){
        super(emName, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = intern;