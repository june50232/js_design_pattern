// 多態 Polymorphism

class People {
    constructor(name) {
        this.name = name
    }
    saySomething (){

    }
}

class A extends People {
    constructor(name) {
        super(name);
    }
    saySomething() {
        console.log(`I am ${this.name}`)
    }
}

class B extends People {
    constructor(name) {
        super(name);
    }
    saySomething() {
        console.log(`I am ${this.name}`)
    }
}

let a = new A('A')
a.saySomething()
let b = new B('B')
b.saySomething()