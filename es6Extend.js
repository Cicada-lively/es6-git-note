class Parent{
  constructor(name){
    this.name = name;
  }
  static fn(){
    return 'zhangsan'
  }
}
class Child extends Parent{
  constructor(name){
    super(name) //只要有父类，子类就有constructor， 就要写super
    // parent.call(this) //继承私有方法
  }
}
// 子类可以继承父类的静态方法
console.log(Child.fn())
let child = new Child('1')
console.log(child.name)

function fn(num){
  if(num>100){return 0}
  if(num%15===0){ return num+fn(num+1)}
  return fn(num+1)
}
console.log(fn(1))

function fn(num){
  if(num<=1){
    return 1
  }
  if(num%2 === 0){
    return num * fn(num-1)
  }
  return fn(num-1)
}
var result = fn(10)
console.log(result)

// 快速排序
// 先找到这一项的中间项
var array=[12,34,54,65,23,65,23,45,76]
function paixu(arr){
  for(var i=0; i<arr.length; i++){
    for(var j=i+1; j<arr.length; j++){
      if(arr[i]>arr[j]){
        [arr[i],arr[j]] = [arr[j],arr[i]]
      }
    }
  }
  return arr
}
console.log(paixu(array))

