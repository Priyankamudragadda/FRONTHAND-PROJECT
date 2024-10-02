//Example-1
function sum(...numbers){
    return numbers.reduce((acc,curr) => acc + curr,0);
}
console.log(sum(1,2,3,4,5))
console.log(sum(10,20));

//Example-2
const arr1 =[3,5,7];
const arr2 =[4,6,8];
const combined =[...arr1,...arr2];

console.log(combined);