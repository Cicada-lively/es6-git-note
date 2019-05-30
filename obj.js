let obj = {name: 'zfpx'}
let age = {age: '9'}

obj.__proto__ = age;

let obj = {name: 'zhangsan'}
let age = {age: 10}
Object.setPrototypeOf(obj,age)
console.log(obj.age)


