// 解构：等号的左边和右边相似
// 数组的结构
let arr = ['zfpx','9']
let name = arr[0]
let age = arr[1]

let arr = ['zfpx',9]
let [name,age] = arr
console.log(name,age)


// 对象的结构
// 起别名用冒号，默认值用等号
let obj = {name:'zfpx', age: '9'}
let {name:n,age}= obj
console.log(n,age)

// 复杂的解构  省略解构
let arr=[{name:'zfpx',age:'9'},'回龙观',{age:'9'}]
let [,address,{age}] = arr
console.log(address, age)





