// class AgedPerson {
// 	printAge(){
// 		console.log(this.age);
// 	}
// }

// class Person extends AgedPerson{
// 	name = 'Max';

// 	constructor(){
// 		super();
// 		this.age = 30;
// 	}
// 	greet() {
// 		console.log(
// 			'Hi, I am ' + this.name + ' and I am ' + this.age + 'years old'
// 		);
// 	}
// }



// // function Person() {
// // 	this.age = 30;
// // 	this.name = 'Max';
// // 	this.greet = function() {
// // 		console.log('Hi, I am ' + this.name + ' and I am ' + this.age + 'years old');
// // 	}
// // }

// // console.dir(Person);

// // const p = new Person();
// // p.greet();
// // // console.log(p.toString());
// // console.log(p.__proto__);

// console.log(Person);
// const p = new Person();
// console.log(p.__proto__);

function f1(){
	this.age = 30;
	console.log(30);
	console.log(this.age);
}

let a= new f1();
console.log(a.age);