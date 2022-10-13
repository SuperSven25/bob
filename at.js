const array1 = [ "water", "wind", "gg" ,"earth", "fire"];

let index = 2;

console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);


index = -2;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);

/*
.at gör att den tar elementet på den platsen som index är. I första fallet så är index två
vilket gör att den väljer element på plats 2. 
*/