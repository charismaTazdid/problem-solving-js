// Remove Duplicate Elements from an Array using One-Liner

const removeDuplicate = (arr) => [... new Set(arr)];

const crushList = ['Ritu', 'Nilufa', 'Piya', 'Nafisa', 'Piya', 'Ritu', 'Adhora'];

const result = removeDuplicate(crushList);
console.log(result);

// default Set method will remove Duplicate. and (...) oparator trun Set Object into new Array