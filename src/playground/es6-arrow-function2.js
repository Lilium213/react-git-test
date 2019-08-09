const add = function (a,b){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(add(8,5,1000 ));

const user = {
    name: 'Someone that I used to know',
    cities: ['New York', 'Yorkshire', 'Berlin'],
    printPlacesLived: function() {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        })
    }
};

user.printPlacesLived();


const multiplier = {
    numbers: [1,2,3,4,5],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply());