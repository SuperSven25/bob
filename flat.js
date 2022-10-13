const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(1));
// expected output: [0, 1, 2, [3, 4]]

/*
.flat tar bort antalet sub arrays som man skivit i parantesen. 
*/