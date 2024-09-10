class Regtangle{

    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    area(){
        return this.width * this.height;
    }

    perimeter(){
        return 2 *(this.width + this.height);
    }

    displayinfo(){
        console.log('width: this.width, height: this.height, Area: this.area(), Perimeter: this.perimeter()');
    }

    toString(){
        return 'width: this.width, height: this.height, Area: this.area(), Perimeter: this.perimeter()';
    }
}

var rectangleOfcount = new Regtangle(5,10);
rectangleOfcount.displayinfo();
console.log(rectangleOfcount.toString());

