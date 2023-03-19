// Capitalizing strings using One-leners in Javascript

const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

const name = "abul";

console.log(capitalize(name))
