"user strict"

const cel=require("prompt-sync");
const prompt=cel();

a=prompt("Enter number of steps:")
function matchHouse(a){
     return 6*a-(a-1);
}
console.log(matchHouse(a))