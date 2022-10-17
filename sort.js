const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

/*
sort sorterar en array i kronoligisk ordning t.ex. första bokstaven i en string eller
första siffran i ett tal t.ex. 1 21 3
*/