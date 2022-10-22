function mulFun(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
};
console.log(mulFun(2)(4)(5)) //output : 2 * 4 * 5 = 40

// Es6 implementation
const mulFunction = (a) => {
    return (b) => {
        return (c) => {
            return a * b * c;
        };
    };
};

console.log(mulFunction(3)(2)(5)) //output: 3 * 2 * 5 = 30


//The MUL function is a miniature of the multiplication function. In this function, we call the function that required an argument as a first number, and that function calls another function that required another argument and this step goes on. 

// The first function’s argument is a, the second function argument is b and the third is c, so the return value will be abc.