//Write a JavaScript function to convert a string in abbreviated form.
// given input: Raihan Tazdid
// expected output: Raihan T.

const abbrevName = function (str) {

  let result = str.split(" ");

  if (result.length) {
    return `${result[0]} ${result[1][0]}.`
  }
  return result;

};

console.log(abbrevName("Raihan Tazdid"))

const str = "Samia"
// console.log(str.charAt(0))  //=> Dot notation
// console.log(str[0])  //=> Bracket Notation
