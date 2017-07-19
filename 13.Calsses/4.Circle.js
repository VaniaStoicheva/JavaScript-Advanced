/**
 * Created by 1234 on 14.7.2017 г..
 */
class Circle{
    constructor(radius){
        this.radius = radius;
    }

    get diameter() {
        return 2*this.radius;
    }

    set diameter(diameter) {
        this.radius=diameter/2;
    }
    get area(){
        return Math.PI*this.radius*this.radius
    }
}
let c=new Circle(5);
c.diameter=1.6;
console.log(c.radius);