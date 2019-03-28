function extend (Child,Parent){
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child;
}
function Shape(color) {
    this.color = color
}
Shape.prototype.duplicate = function(){
    console.log('duplicate')
}

function Circle(radius,color){
    this.radius = radius
    Shape.call(this,color)
}
extend(Circle,Shape)

Circle.prototype.draw = function(){
    console.log('draw')
}
// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;
extend(Square,Shape)

function Square(size){
    this.size = size
}
Square.prototype.draw = function(){
    console.log('this square is '+this.size)
}

const s = new Shape()
const c = new Circle(1,'red')


