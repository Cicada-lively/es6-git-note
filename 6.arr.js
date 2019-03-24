// Array.from()
// 将类数组转换为数组 arguments  dom对象

let arr = Array.from({
    0: '1',
    1: '2',
    2: '3',
    length: 3
})
console.log(arr)


// 用[...]需要当前尅数组有“迭代器”
// 什么是迭代器，迭代器需要返回一个对象，对象上有一个next 方法，每次调用next方法返回一个新对象，对象上有两个属性，分别是value和done







