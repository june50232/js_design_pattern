// parent class 父類
class People {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    eat() {
        console.log(`${this.name} eat`);
    }
    speak() {
        console.log(`my name is ${this.name}, age ${this.age}`)
    }
}

// child class inherits parent class
class Student extends People {
    constructor(name, age, number) {
        super(name, age)
        this.number = number
    }
    study() {
        console.log(`${this.number} ${this.name} study`)
    }
}

let xiaoming = new Student('xiaoming', 10, 'A1')
xiaoming.study()
console.log(xiaoming.number)
xiaoming.eat()

let xiaohong = new Student('xuaohong', 11, 'A2')
xiaohong.study()
xiaohong.speak()

// React inherit

class People extends React.component {
    constructor() {
        super();
        this.state
    }
    render(){}
}