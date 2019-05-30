// ...的作用 在我们的函数形参中， 是剩余运算符，把剩下的结果转换为数组


// 在对象中或数组中， 也可以用...
// 展开运算符 扩展运算符
let arr = [1,2,3]
let arr2 = [4,5,6];
let arr3 = [...arr,...arr2]
console.log(arr3)

// 对象
let name = {name:'zfpx'}
let age = {age:'8'}
let result = {...name,...age};
console.log(result)

let name = {name: 'zfpx'}
let age = {age:'8'}
let newObj = Object.assign({},name,age)
console.log(newObj)


// 深拷贝（两个对象完全没有关系） 浅拷贝（对象里存的空间地址，令一个对象改变空间，也会导致当前对象更改）
// object.assign 是浅拷贝 {...}也算浅拷贝

let school = {name:{name:'zfpx'}}
let newSchool = Object.assign({},school)
// let newSchool = {...school}
// let newSchool = {...{name:{}}}

// console.log(school == newSchool)
school.name.name = 'jw'
console.log(newSchool)

// 深拷贝  递归拷贝
let school = {name:{name:'zfpx'},fn:function(){}}
let newSchool = JSON.parse(JSON.stringify(school))
school.name.name = 'zf'
console.log(newSchool)



let school = {name:{name:'zfpx',fn:function(){}},age:9,address:'珠峰',arr:[1,2,3,4]}
function deepClone(parent,c){   //parent要拷贝的对象
    let child = c || {}
    for(let key in parent){
        if(parent.hasOwnProperty(key)){
            let val = parent[key]
            if(typeof val === 'object'){
                child[key] = Object.prototype.toString.call(val) === '[object Array]'?[]:{}
                deepClone(parent[key],child[key])
            }else{
                child[key] = parent[key]   //处理普通属性的
            }
        }
    }
    return child
}

let child = deepClone(school)
school.name.name = 'jw'
console.log(child)

// 展开运算符
let arr =[1,2,3,4]
// console.log(Math.min.apply(Math,arr))

console.log(Math.min(...arr))


// 在函数的参数上叫剩余
// 在函数的内部叫展开

