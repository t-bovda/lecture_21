'use strict'

// 1 *************************************************** 
// const car = {
//        name : 'Fiat',
//        model:"500",
//        color:"white",
//        status: 'read and write', 
//        signal: function () {
//            console.log('fa! fa!');        
//        }
// }
// console.log(car.color);
// car.color = 'red'
// console.log(car.color);
// car.type = 'electric'
// console.log(car.type);
// car.signal()

// *********************************
// const car = {
//   name : 'Fiat',
//   model:"500",
//   color:"white",
//   status: 'read and write', 
//   signal: function () {
//     alert('fa! fa!');        
//   }
// }
// alert(car.color);
// car.color = prompt('Change color', '');
// alert(car.color);
// car.type = prompt("engine's type",'electric,gas,diesel');
// alert(car.type);
// car.signal();


// 2 ****************************************

// let salaries = {
//   frontend: 12000,
//   backend: 10000,
//   designer: 8000,
// }
// salaries.manager = 5000;
// delete salaries.designer

// let result = 0;
// for (let key in salaries) {
//   result += salaries[key];
// }
// console.log('we must pay salary on Tuesday!',result);


// *************
let sum = 0;
let salaries = {
    frontend: 12000,
    backend: 10000,
    designer: 8000,
    dayPay(){
        alert('We must pay salary on Tuesday!');
    },
    total(){
        for (let key in salaries) {
                if (typeof salaries[key] === 'number') {
                   sum += salaries[key];
                }
              }
        return console.log(`Total salary ${sum}$`)
    }
};

salaries.manager = 5000;
salaries.total();







// ***********************************************************


// function Laptop(brand, system, cost){

//   this.brand = brand;
//   this.system = system;
//   this.cost = cost;

// }
// let dell = new Laptop('Dell', 'Windows', 800);
// let apple = new Laptop('Apple', 'MAC OS', 1700);
// console.log(dell);
// console.log(apple);

// function Laptop(brand, system, cost){
//   this.brand = brand;
//   this.system = system;
//   this.cost = cost;
//   this[Symbol.toPrimitive] = function (hint){
//     console.log(hint); 
//     switch(hint){
//         case 'string':
//             return this.brand
//         case 'number':
//             return this.cost
//         case 'default':
//             return this.brand + ' ' + this.system + ' ' + this.cost + ' // '
//     }
// }
// }
// let dell = new Laptop('Dell', 'Windows', 800);
// let apple = new Laptop('Apple', 'MAC OS', 1700);
// let group = {};
// group[dell] = dell + apple;

// console.log(String(dell));
// console.log(+apple);
// console.log(dell+apple);


