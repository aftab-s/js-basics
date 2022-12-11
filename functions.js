
function square (x){
    return x * x;
}

console.log(square(2));

//or

const a = [1,2,3,4,5];

//Mapping Values to the Array
const sq_a = a.map((e) => square(e));

//Filtering Odd values from Array
const odd_a = a.filter((e) => e % 2);

console.log(sq_a);
console.log(odd_a);