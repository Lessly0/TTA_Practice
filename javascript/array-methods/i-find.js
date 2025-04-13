
let mixed = [1, "apple", true, 42];

let firstNumberGreaterThan10 = mixed.find(item => typeof item === "number" && item > 10);
console.log("First number greater than 10:", firstNumberGreaterThan10);