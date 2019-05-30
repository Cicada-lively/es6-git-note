// after 在多少次之后执行
function after(times,callback){
  return function(){
    if(--times == 0){
      callback()
    }
  }
}

let fn = after(3,function(){
  console.log('after')
})

fn()
fn()
fn()
