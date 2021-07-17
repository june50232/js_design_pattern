/**
 * 叫車時，可以叫小黃或白牌，每台車都有車牌號和名稱
 * 不同車的價格不同，白牌 1元/公里，小黃 2元/公里
 * 行程開始時，顯示車輛訊息
 * 行程 5 公里結束時，顯示總金額
 *
 * 1. 畫出 UML 例圖
 * 2. 用 ES6 語法寫出該示例
 */

class Taxi {
    constructor(km, name) {
        this.km = km
        this.name = name
    }
}

class Yellow extends Taxi {
    constructor(km, name) {
        super(km, name);
        this.price = 2
    }
}

class White extends Taxi {
    constructor(km, name) {
        super(km, name);
        this.price = 1
    }

}

class Trip {
    constructor(car) {
        this.car = car
    }
    showInfo() {
        console.log(`Taxi info: ${this.car.name} $${this.car.price}/km`)
    }
    sum(){
        console.log(`total: ${this.car.km}km x $${this.car.price}/km = $${this.car.price*this.car.km}`)
    }
    start(){
        this.showInfo()
    }
    end(){
        this.sum()
    }
}

const yellow = new Yellow(5, 'toyota')
const white = new White(5, 'Benz')
const tripYellow = new Trip(yellow)
const tripWhite = new Trip(white)
tripYellow.start()
tripYellow.end()
tripWhite.start()
tripWhite.end()