//Remove spaces from a given string
//given input: Hello World How is it Going on?
//expected output: HelloWorldHowisitGoingon?

const removeSpace = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            continue
        }
        else
            result += str[i]

    }
    return result
}

console.log(removeSpace("Hello World How is it Going on?"))