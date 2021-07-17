class People {
    constructor(name, house) {
        this.name = name
        this.house = house
    }
    saySomething() {

    }
}

class A extends People {
    constructor(name, house) {
        super(name, house)
        this.name = name
        this.city = house.city || ''
    }
    saySomething() {
        console.log(`I am ${this.name}, settled in ${this.city}`)
    }
}

class B extends People {
    constructor(name, house) {
        super(name, house)
        this.name = name
        this.city = house.city || ''
    }
    saySomething() {
        console.log(`I am ${this.name}, settled in ${this.city}`)
    }
}

class House {
    constructor(city) {
        this.city = city
    }
    showCity() {
        console.log(`city is ${this.city}`)
    }
}

let aHouse = new House('Taipei')
let a = new A('A', aHouse)
a.saySomething()
let b = new B('B', aHouse)
b.saySomething()