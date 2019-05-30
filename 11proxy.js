function update(){
  console.log("更新")
}

function $set(obj,callback){
  let $data = new Proxy(obj,{
    set(target,key,value){
      update()
      target[key] = value
    }
  })
  callback($data)
}

let obj = {name: 'zhangsna',age:{age:1}}
$set(obj,function($data){
  $data.name = 'hello'
})

