let firstArray = [1,2,3,4,9,2];

firstArray.slice().forEach(() => console.log(firstArray.pop()));

let uniformArray = [1,1,1,1];
let notUniformArray = [2,1,1,1];

console.log(isUniform(uniformArray));
console.log(isUniform(notUniformArray));

function isUniform(array){
	let lastNum = array[0];

	for(let i=1; i<array.length; i++)
		lastNum===array[i]?null:return false;
	return true;
}

let sum = [1,2,3];
let total = 0;
sum.forEach((number) => total+=number);
console.log(total);

let max = [1,8,2,3];
let maxNum = 0;

max.forEach((number) => (number>=maxNum)?maxNum=number:null);
console.log(maxNum);