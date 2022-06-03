const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager"
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getImage(){
        return "https://images.pexels.com/photos/3285203/pexels-photo-3285203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
}
module.exports = Manager;
