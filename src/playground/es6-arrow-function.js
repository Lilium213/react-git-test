const square = function (x) {
    return x * x;
};

const squareArrow = (x) => {
    return x * x;
};

const squareArrowShort = (x) => x * x;

const name = "Andrew Mead";

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName(name));