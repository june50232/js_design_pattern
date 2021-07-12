// Object 對象
// class 類
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

// create instance 創建實例
let zhang = new People('zhang', 20)
zhang.eat()
zhang.speak()

// create instance 創建實例
let wang = new People('wang', 21)
wang.eat()
wang.speak()