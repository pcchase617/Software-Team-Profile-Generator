const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getRole(){
        return "Intern"
    }

    getSchool(){
        return this.school;
    }

    getImage(){
        return "https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
}
module.exports = Intern;
