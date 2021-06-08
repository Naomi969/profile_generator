const employee = require('./employee');

class engineer extends employee {
    constructor (emName, id, email, github) {
        super(emName, id, email)
    }
}