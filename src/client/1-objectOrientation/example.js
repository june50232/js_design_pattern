class jQuery {
    constructor(selector) {
        let slice = Array.prototype.slice
        let dom = slice.call(document.querySelectorAll(selector))
        let len = dom ? dom.length : 0
        for (let i = 0; i < len; i++){
            this[i] = dom[i]
        }
        this.length = length
        this.selector = selector || ''
    }
    append(node) {

    }
    addClass(name) {

    }
    html(data){

    }
    // ...
}

window.$ = function(selector) {
    // 工廠模式 factory pattern
    return new jQuery(selector)
}

var $p = $('p')
console.log($p)
console.log($p.addClass)