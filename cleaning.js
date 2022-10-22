const https = require('https');

function processData(obj) {
    // console.log(Object.keys(obj))

    Object.keys(obj).forEach(key => {
        // console.log(key)
        // console.log(obj[key])
        if (obj[key] === "N/A" || obj[key] === "" || obj[key] === "-") {
            // console.log("I am going to delete this: ", key, obj[key])
            delete obj[key];
        }
        else if (Array.isArray(obj[key])) {
            let n = obj[key].length;
            let arr = [];
            for (let i = 0; i < n; i++) {
                if (obj[key][i] === "" || obj[key][i] === "-" || obj[key][i] === "N/A")
                    continue;
                let p = [obj[key][i]];
                // console.log('I am the p: ', p)
                if (typeof (p[0]) === 'object') {
                    p[0] = processData(p[0]);
                }

                arr = arr.concat(p);
                // console.log('I am the concated arr: ', arr)
            }
            obj[key] = arr;
            // console.log('I am the obj[key] = arr: ', obj[key] )
        }
        
        else if (typeof (obj[key]) === 'object') {
            obj[key] = processData(obj[key]);
        }
    })

    return obj;
}

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {

    resp.on("data", (a) => {
        let givenObject = (JSON.parse(a.toString()));
        // console.log(givenObject)
        let resultObject = processData(givenObject);
        // console.log(resultObject)
    })
});