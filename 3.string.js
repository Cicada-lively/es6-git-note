// 模板字符串
let name = 'zfpx'
let age = '9'

// let str = "\"" + name + "\"" + '今年' + age +'岁了'


let str = `"${name}" 今年 ${age} 岁了 `
console.log(str)

// 模板字符串可以换行


let str = `<ul>
            <li>${name}</li>
            <li>${age}</li>
            </ul>`


    //  实现模板字符串（替换将替换的结果用eval执行）
    let name = 'zfpx'
    let age = '9'
    let str = `<ul><li>${name}</li> <li>${age}</li></ul>`
    let newStr = str.replace(/\$\{([^ }]+)\}/g,function(){
        return eval(arguments[1])
    })
    console.log(newStr)
           
// 带标签的模板字符串
let name = 'zfpx'
let age = 9
function tag(strings) {
    let args = Array.prototype.slice.call(arguments,1)
    let str = ''
    for(let i = 0; i<args.length; i++){
        str += strings[i] + args [i].toString().toUpperCase()
    }
    str += strings[strings.length-1]
    return str
}
let str = tag`${name}今年${age}岁了`
console.log(str)

// 字符串的方法  判断字符串中是否含有某个字符串
let str = 'wangchan'
let a = str.includes('wa')
console.log(a)

// 判断字符串前面是不是某个字符串  startsWith   endWith
let url = 'http://www.baidu.com'
let b = url.startsWith('http')
console.log(b)

let avatar ='1.png' 
let b = url.endsWith('png')
console.log(b)
// 补位  padStart(2,0)  前面补位
