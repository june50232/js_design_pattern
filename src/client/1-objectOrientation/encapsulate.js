// 封裝
// public private protected
// es6 不支持 用 typescript 來演示 https://www.typescriptlang.org/play
// 減少耦合, 不該外露的不外露
// 利於數據接口管理
// es6 一般認為 _開頭的屬性是 private
/*
class People {
    name // public
    age // public
    protected weight // 定義 protected 屬性，只對自己和 child 開放
    constructor(name, age){
        this.name = name
        this.age = age
        this.weight = 120
    }
    eat() {
        console.log(`${this.name} eat`);
    }
    getWeight() {
        console.log(`my weight is ${this.weight}`)
    }
}

class Student extend People {
    number
    private boyfriend // 定義 private
    constructor(name, age, number){
        super(name, age)
        this.number = number
        this.boyfriend = 'Rex'
    }
    study() {
        console.log(`${this.name} study`);
    }
    getWeight() {
        console.log(`my weight is ${this.weight}`)
    }
}

let xiaoming = new Student('xiaoming', 10, 'A1')
xiaoming.getWeight() // my weight is 10
console.log(xiaoming.girlfriend) // error
*/