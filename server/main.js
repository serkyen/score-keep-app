import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup( () => {
 

  // class Person {
  //   constructor(name = 'Anonymous', age = 0) {
  //     this.name = name;
  //     this.age = age;
  //   }
  //   getGreeting() {
  //     // return 'Hi! I am ' + this.name + '.';
  //     return `Hi! I am ${this.name}.`;
  //   }
  //   getPersonDescription() {
  //     return `${this.name} is ${this.age} year(s) old.`
  //   }
  // }


  // class Employee extends Person {
  //   constructor(name, age, title) {
  //     super(name, age);
  //     this.title = title;
  //   }
  //   getGreeting() {
  //    if (this.title) {
  //     return `Hi! I am ${this.name}. I work as a ${this.title}.`;
  //    } else {
  //     return super.getGreeting();
  //    }
  //   }
  //   hasJob() {
  //     return !!this.title;
  //   }
  // }

  // class Programmer extends Person {
  //   constructor(name, age, preferredLanguage = "assembly") {
  //     super(name, age);
  //     this.preferredLanguage = preferredLanguage;
  //   }
  //   getGreeting() {
  //    if (this.preferredLanguage) {
  //     return `Hi! I am ${this.name}. I am a ${this.preferredLanguage} developer.`;
  //    } else {
  //     return super.getGreeting();
  //    }
  //   }
  // }

  // let me = new Programmer('Serks', 36);
  // console.log(me.getGreeting());

  // let you = new Programmer('Andrew', 42, 'javascript');
  // console.log(you.getGreeting());


  // let me = new Employee('Serks', 36, 'db admin');
  // // console.log(me.getGreeting());
  // console.log(me.getGreeting());

  // let me2 = new Employee('Serks', 36);
  // // console.log(me2.getPersonDescription());
  // console.log(me2.getGreeting());
  
});

// // Object Spread Operator
// let user = {
//   name: 'Andrew',
//   location: 'Philadelphia'
// };

// let person = {
//   ...user,
//   age: 25
// };

// // console.log(person);

// //Obect Property shorthand
// let bike = 'Scott';
// let stuff = {
//   bike 
// }
// // console.log(stuff);


// let house = {
//   bedrooms: 2,
//   bathrooms: 1.5
// };
// let yearBuilt = 1995;

// let listing = {
//   ...house,
//   bedrooms: 3,
//   bathrooms: 1.5,
//   yearBuilt,
//   flooring: 'Carpet'  
// }
// console.log(listing);