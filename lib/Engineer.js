const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getRole(){
        return "Engineer"
    }

    getGithub(){
        return this.github;
    }

    getImage(){
        return "https://media.istockphoto.com/photos/engineer-using-tablet-and-working-in-factory-picture-id1195885084?k=20&m=1195885084&s=612x612&w=0&h=4il_Ywj3y7RY12yniq1tt0GI6SmG4Kw7cp1KX1A5XOY="
    }
}
module.exports = Engineer;