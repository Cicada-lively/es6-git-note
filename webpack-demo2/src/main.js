// 这是main.js是我们项目的JS入口文件

// 1.导入Jquery
// import *** from *** 是ES6中导入模块的方式
import $ from 'jquery'
// const $ = require('jquery')


$(function(){
  $("li:odd").css("backgroundColor","yellow")
  $("li:even").css("backgroundColor",function(){
    return "#"+ 'd97634'
  })
})
