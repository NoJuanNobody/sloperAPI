

export class Coordinate {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
}

export class Vector {
    constructor({name, pointOne, pointTwo}){
        this.pointOne = pointOne;
        this.pointTwo = pointTwo;
        this.name = name;
        this.id = Math.random() * Math.ceil(1000000);
        
    }
}

Vector.prototype = {
    dot: (v) => {
        return (this.pointTwo.x-this.pointOne.x) * v.x * (this.pointTwo.y - this.pointOne.y) * v.y; 
    },
    length: () => {
        return Math.sqrt(this.dot(this));
    },

}