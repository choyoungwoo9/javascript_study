// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = new Array(3);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(2);
// // console.log(yetMoreNumbers);

// const listItems= document.querySelectorAll('li');

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for(const data of analyticsData) {
// 	for(const dataPoints of data) {
// 		console.log(dataPoints);
// 	}
// }

// console.log(personalData[1])

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();

// console.log(hobbies);

// hobbies[1] = 'Coding';
// // hobbies[5] = 'reading'

// console.log(hobbies, hobbies[5]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// hobbies.splice(0, 1);
// console.log(hobbies);

// //해당요소 이후 전체 삭제
// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies);
// console.log(removedElements);

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// // const storedResults = testResults.slice(1, 3);
// const storedResults = testResults.concat([3.99, 2]);

// console.log(testResults.includes(5.4));

// testResults.push(5.91)

// console.log(testResults);
// console.log(storedResults);

// console.log(testResults.lastIndexOf(1.5));

// const personData = [{name: 'Max',}, {name: 'Manuel'}];
// console.log(personData.indexOf({name:"manuel"}));

// const manuel = personData.find((person, index, persons) => {
// 	return person.name === 'Manuel';
// });

// manuel.name = 'Anna';

// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, index, persons) => {
// 	return person.name === 'Max';
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax= 0.19;
// const taxAdjustedPrices = [];

// // for(const price of prices) {
// // 	taxAdjustedPrices.push(price * (1+tax));
// // }

// prices.forEach((price, idx, prices) => {
// 	const priceObj = {index: idx, taxAdjPrice: price * (1+tax)};
// 	taxAdjustedPrices.push(priceObj)
// });

// console.log(taxAdjustedPrices);


const prices = [10.99, 5.99, 3.99, 6.59];
const tax= 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
	const priceObj = {index: idx, taxAdjPrice: price * (1+tax)};
	return priceObj;
});

// console.log(taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
	if(a > b){
		return 1;
	}
	else if(a === b){
		return 0;
	} else {
		return -1;
	}
});
console.log(sortedPrices.reverse());

const filteredArray = prices.filter(price => price > 6);

console.log(filteredArray);

// let sum = 0;
// prices.forEach((price) => {
// 	sum += price
// });

// console.log(sum);

const sum = prices.reduce((prevValue, curValue, cruIndex, prices) => {
	return prevValue += curValue;
}, 0);

console.log(sum);
console.log(prices);