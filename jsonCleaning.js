const https = require('https');

function processData(objct) {
    Object.keys(objct).map((key) => {
        if (objct[key] === "" || objct[key] === "-" || objct[key] === "N/A") {
            delete objct[key]
        }
        else if (Array.isArray(objct[key])) {
            let n = objct[key].length;
            let initialArr = objct[key];
            let filterdArr = [];
            for (let i = 0; i < n; i++) {
                if (initialArr[i] === "" || initialArr[i] === "-" || initialArr[i] === "N/A")
                    continue
                // let element = [initialArr[i]]
                // if (typeof element[0] === "object") {
                //     element[0] = processData(element[0])
                // }
                // filterdArr = filterdArr.concat(element);
                let element = initialArr[i];
                if (typeof element === "object") {
                    element = processData(element)
                }
                filterdArr.push(element)
            };
            objct[key] = filterdArr;

        }

        else if (typeof objct[key] === "object") {
            objct[key] = processData(objct[key])
        }

    })
    return objct
}



https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (response) => {
    response.on('data', res => {
        let givenObject = JSON.parse(res.toString())
        console.log(givenObject)
        let resultObject = processData(givenObject);
        console.log("Proccessed:", resultObject)
    })
})

/*

Problem Statement: I want to remove all keys that have values of N/A, - or an empty string. If one of these values appear in the array the I want to remove that single item from the array. So for instance my example output is this:

Given Input: {"name":{"first":"Robert","middle":"","last":"Smith"},"age":25,"DOB":"-","hobbies":["running","coding","-"],"education":{"highschool":"N\/A","college":"Yale"}}

The output I expect is this

{"name":{"first":"Robert", "last":"Smith"},"age":25, "hobbies":["running","coding"],"education":{"college":"Yale"}}


*/

