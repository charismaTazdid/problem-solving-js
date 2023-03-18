// Goal is to loop over an object and check something valid

const song = {
    name: "niscup Adhare", band: "Shironamhin",
    album: "jahazi", vocal: 'Tanzir tuhin', year: 'N/A',
    gener: "Rock", writer: "N/A"
}

const keys = Object.keys(song)
const values = Object.values(song)

// trying to get result "name = value" format
for (i = 0; i < values.length; i++) {
    console.log(keys[i] + " = " + values[i])
}

// write a function to remove "N/A" from an object

const removeNA = (obj) => {
    const keys = Object.keys(obj);
    const values = Object.values(obj);

    for (let i = 0; i < values.length; i++) {
        if (values[i] == "N/A") {
            delete obj[keys[i]]
        }
    }
    return obj;
};

console.log(removeNA(song))
