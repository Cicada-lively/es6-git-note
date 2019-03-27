//var有很多问题
// 1.同一个变量用var可以声明多次
// 2.var有预解释 变量提升
// 3.var的作用域问题，全局作用域 局部作用域
// 4.声明的变量可以更改，没有常量的概念

//  1)不能重复声明
var name = 'zhangsan'
var name = 'lisi'

let name = 'zfpx'
let name = '1234'

// 2、变量提升
console.log(a)
var a = 1

// 3.作用域的问题  会污染全局变量（全局作用域  函数作用域）
var a = 1
console.log(window.a)

// 当一个变量在一个作用域下声明过 这个变量就会绑定在这个作用域下

let a = 1
if(true){
    console.log(a)
    let a = 2
}
// 4. 常量  const 来声明常量 不能改的值
const pi= 3.15
pi = 3.14

const school = {name : 'zfpx'}
school.name = 'zf'
console.log(school)

k
for(var i = 0; i<3;i++) {
    (function (i){
        setTimeout(function(){
            console.log(i)
        })
    })(i)
}

// var 
// 可以重复声明
// 无法限制修改
// 没有块级作用域
// let  不能重复声明   变量-可以修改    块级作用域
// const 不能重复声明  常量 - 不可以修改  块级作用域




