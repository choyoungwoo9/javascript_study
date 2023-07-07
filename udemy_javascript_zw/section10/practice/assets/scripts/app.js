// // class Product {
// // 	title = 'DEFAULT';
// // 	imageURL;
// // 	description;
// // 	price;
	
// // 	constructor(title){
// // 		this.title = title;
// // 	}
// // }

// // console.log(new Product());

// // class A{
// // 	constructor(){
// // 		A.b = new B();
// // 	}
// // }

// // class B{
// // 	constructor(){
// // 		B.b = new A();
// // 	}
// // }

// // console.log(new A());

// // class A{
// // 	render()
// // 	{
// // 		console.log(this);
// // 	}
// // 	a;
// // }

// // let b = new A();
// // let {render} = b;
// // render();

// // let C = {
// // 	f() {console.log(this)}
// // }

// // let {f} = C;
// // f();



// class C1{
// 	#a = 3;
// 	f1(){
// 		console.log(this.#a);
// 		console.log(this);
// 	}
// }

// class C2 extends C1{
// 	#b = 4;
// 	f2(){
// 		console.log(this.#b);
// 	}
// }

// let b = new C2;
// console.log(b.a);
// console.log(b.f1());
// console.log(b.f2());