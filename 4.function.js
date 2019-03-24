//  函数可以赋值默认值， 一般情况下 和对象的解构一起用
 
 function ajax({url=new Error(url不能为空),methods='get'}){

 }
ajax('/test','get')

// ...  将函数剩下的参数 变为数组 只能放在参数的最后面
function sum(currency, ...args) {
    return currency + eval(args.join('+'))
}
let money = sum('￥',1,2,3,4,5,6,7,8,9)
console.log(money)


// 箭头函数的特点： 没有function 关键字 没有this指向 没有 arguments
// 谁调用的this 就是谁， 箭头函数中没有 this 就会向上找 找到后返回

let name = 2
let obj = {
    name: 1,
    fn: function(){
        setTimeout(()=>{
            console.log(this.name)
        })
    }
}
let fn = obj.fn();
// fn()

// 对象不是作用域，作用域有函数和{}全局
let name = 1
let obj = {
    name: 2,
    fn:()=>{
        console.log(this.name)
    }
}
obj.fn()




