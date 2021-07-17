function loadImg(src) {
    const promise = new Promise(function (resolve, reject) {
        const img = document.createElement('img')
        img.onload = function() {
            resolve(img)
        }
        img.onerror = function() {
            reject('load fail!')
        }
        img.src = src
    })
    return promise
}

const src = 'https://github.com/june50232/javascriptAdvancedExcercise/raw/master/images/mindmap.png'
const result = loadImg(src)

result.then(function (img) { // 每個 then 只做一件事
    console.log('img.width ===', img.width)
    return img
}).then(function (img) { // 如果新增需求，擴展 then
    console.log('img.height ===', img.height)
}).catch(function (error) {
    console.log('error', error)
})