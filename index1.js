// console.log('hello word!')
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y:1
//     },
//     draw: function(){
//         console.log('draw')
//     }
// }
// factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function(){
            console.log('draw')
        }
    }
}
const circle = createCircle(1);
circle.draw()

// constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }
}
var another = new Circle(1)
another.draw()

