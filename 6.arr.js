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

/* 数组 
map        映射        一个对一个   
                      [12,58,98,89,78,90] [不及格,不及格,及格,及格,及格,及格]

reduce     汇总  [12,67,87]
filter     过滤器

forEach    循环（迭代）

*/
// let arr = [12,5,8]
// let result = arr.map(item=>item * 2 )
// console.log(result)
let score = [12,58,98,89,78,90]
let result = score.map(item=>
    item>60?'jige':'bujige'
)
console.log(result)

let arr = [12,3,5,98]
let result = arr.reduce((temp,item,index)=>{
    // console.log(temp,item,index)
    if(index != arr.length-1){
        return temp + item
    } else {
        return (temp + item)/arr.length
    }
    
})
console.log(result)

let arr = []
