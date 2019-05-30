function Parent(){
  this.name = 'parent'
}
Parent.prototype.smoking=function(){
  console.log("smoking")
}

function Child() {

}

// 继承公有属性Object.create是如何实现的
function create(pProto){
  let Fn = function(){} //创建了一个空函数，没有私有属性和公有属性
  Fn.prototype = pProto; //将父类的公有属性放在这个函数上
  return new Fn() //产生的实例就只有公有属性了
}

// Child.prototype = new Parent()
// 继承公有属性 Object.create是如何实现的
Child.prototype = Object.create(Parent.prototype,{constructor:{value:Child}})
let child = new Child()
child.smoking()
console.log(child.__proto__ === Child.prototype)
console.log(child.__proto__.constructor === Child)

// 


