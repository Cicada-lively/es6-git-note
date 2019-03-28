const fs = require('fs')
// 这是一个具体的异步操作，其中，使用function指定一个具体的异步操作


// function getFileByPath(fpath){
//     let promise = new Promise(function(){
//         // 这个function 内部写的就是具体的异步操作
//         fs.readFile(fpath,'utf-8',(err,dataStr)=>{
//             if (err) throw err
//             console.log(dataStr)
//         })
//     })
// }

// getFileByPath('./1.txt')

function getFileByPath(fpath){
    let promise = new Promise(function(resolve,reject){
        console.log(1)
        // 这个function 内部写的就是具体的异步操作
        fs.readFile(fpath,'utf-8',(err,dataStr)=>{
            if (err) return reject(err)
            resolve(dataStr)
            console.log(4)
            // console.log(dataStr)
        })
    })
    console.log(2)
    return promise
}

// let p = getFileByPath('./1.txt')
// p.then(function(data){console.log(3); console.log(data+'-------------')},function(err){console.log(err.message)})

// 在上一个.then 中，返回一个新的promise 实例，可以继续用下一个 .then 来处理
// 如果前面的Promise 执行失败，我们不想让后面的Promise 操作被终止，可以为失败函数的指定失败的回调
// getFileByPath('./11.txt')
//     .then(function(data){
//         console.log(data)
//         return getFileByPath('./02.txt')
//     },function(err){
//         console.log(err)
//         return getFileByPath('02.txt')
//     }).then(function(data){
//         console.log(data)
//         return getFileByPath('3.txt')
//     },function(err){
//         console.log(err)
//         return getFileByPath('3.txt')
//     }).then(function(data){
//         console.log(data)
//     })

//     console.log('okokok')

