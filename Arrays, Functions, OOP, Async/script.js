'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (obj) {
    console.log(obj);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// array destructuring
const [mainDish, secondaryDish] = restaurant.mainMenu;
// console.log(mainDish, otherDishes);

// object destructuring
const {
  openingHours: {
    fri: { open: fridayOpen = 9, close: fridayClose = 22 },
  },
} = restaurant;

// console.log(fridayOpen, fridayClose);

// reassigning variables through destructuring
let open = 9;
let close = 20;
({ open, close } = restaurant.openingHours.sat);
// console.log(open, close);

// spread operator
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(dishes);

// making a shallow copy of objects and arrays using spread operator
const someArray = [2, 5, 3, 8, 6, 1, 9, 7];
const someArrayCopy = [...someArray];
// console.log(someArray);
// console.log(someArrayCopy);

const newRestaurant = { owner: 'Gautam', estd: 2023, ...restaurant };
newRestaurant.name = 'New Classico Italiano';
// console.log(newRestaurant);

const lister = function (...things) {
  // console.log(things);
  things.forEach((item) => console.log(item));
};

// lister(...dishes);

const [pizza, ...otherDishes] = restaurant.mainMenu;
const { fri, ...otherDays } = restaurant.openingHours;

// Short circuiting

restaurant.owner ||= 'John';

restaurant.numberOfGuests = 0;

// console.log(restaurant.numberOfGuests ?? 10);

restaurant.owner = restaurant.owner && `<anonymous>`;

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  //prettier-ignore
  players: [ ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies',  'Kimmich', 
                'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski',],
           ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 
            'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze',], ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// prettier-ignore
const {odds : {team1, x: draw, team2}} = game;

const printGoals = function (...players) {
  players.forEach((pl) => console.log(pl));
  console.log(`${players.length} goals scored in total`);
};
// printGoals(...game.scored);
// team1 < team2 && console.log(`${game.team1} will win`);
// team1 > team2 && console.log(`${game.team2} will win`);

/*
// for-of
for (const [index, val] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${val}`);
}

game.avgOdds = function () {
  const teams = Object.entries(this.odds).length;
  let total = 0;
  for (const odd of Object.values(this.odds)) {
    total += odd;
  }
  return Number((total / teams).toFixed(2));
};

game.scorers = {};
for (const pl of game.scored) {
  game.scorers[pl] ? game.scorers[pl]++ : (game.scorers[pl] = 1);
}
console.log(game.scorers);

// optional chaining
console.log(restaurant.openingHours.tue?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Mon timings: opens at 11, closes at 23
// Wednesday closed

for (const day of days) {
  if (!restaurant.openingHours[day]) {
    console.log(`${day}: closed`);
  } else {
    const { open, close } = restaurant.openingHours[day];
    console.log(`${day}: open at ${open}, closes at ${close}`);
  }
}

// looping objects - entries, keys, values
// console.log(Object.entries(restaurant));
*/

/*
// Sets

//prettier-ignore
const randomArray = [1, 2, 1,'gautam', 2, 1, 2, 3, 1, 2, 4, 1, 2, 6, 3, 4, 5, 6, 'gautam']
const uniqueNums = new Set(randomArray);
console.log(uniqueNums.size);
console.log(uniqueNums.has('gautam'));
uniqueNums.add('Gautam').add('Mohite');
uniqueNums.delete('gautam');
// uniqueNums.clear();
console.log(uniqueNums);

// looping through a Set
for (const val of uniqueNums) {
  console.log(val);
}

const uniqueArr = [...new Set(randomArray)];
console.log(uniqueArr);

// Maps
const details = new Map();
details
  .set('name', 'Gautam')
  .set('lastName', 'Mohite')
  .set('age', 35)
  .set('isMarried', false).set;

const blah = 'name';
console.log(details.get(blah));
details.delete('isMarried');

details.set(
  document.querySelector('h1'),
  document.querySelector('h1').textContent
);

for (const [key, val] of details.entries()) {
  console.log(`${key}: ${val}`);
}

details.delete('[object HTMLHeadingElement]');

details.set(true, 'yes');
details.delete(true);

const arr = [1, 2];
details.set(arr, 'numbers');

console.log(details);

console.log(details.get(arr));

console.log(details.size);

const hours = new Map(Object.entries(restaurant.openingHours));
console.log(hours.get('fri'));

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct! 🎉'],
  [false, 'Try again!'],
]);

console.log(question);

console.log(question.get('question'));
for (const [k, v] of question) {
  typeof k === 'number' && console.log(k, v);
}

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);

const [lastMinuteOfPlay] = [...gameEvents.entries()].at(-1);
console.log(
  `An event happened, on an average, every ${Math.round(
    lastMinuteOfPlay / gameEvents.size
  )} minutes`
);

for (const [key, val] of gameEvents.entries()) {
  const eventStr = `HALF] ${key} ${val}`;
  key <= 45
    ? console.log('[FIRST ' + eventStr)
    : console.log('[SECOND ' + eventStr);
}
*/

/*
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

// prettier-ignore
const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig', 'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving', 'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano', 'Berne, Eric', 'Berra, Yogi', 'Berry,  Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose', 'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank',
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornIn1500s = function () {
  console.log(`Born in 1550s:`);
  inventors.filter(
    (val) =>
      val.year > 1500 &&
      val.year < 1600 &&
      console.log(`${val.first} ${val.last}, ${val.year}`)
  );
};
// bornIn1500s();

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map((val) => `${val.first} ${val.last}`);
// console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const inventorsByBirthdate = inventors.sort((a, b) => b.year - a.year);
// console.log(inventorsByBirthdate);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const yearsLivedInTotal = inventors.reduce((acc, val) => {
  return acc + (val.passed - val.year);
}, 0);
// console.log(yearsLivedInTotal);

// 5. Sort the inventors by years lived
const yearsLivedByEach = inventors.sort((a, b) => {
  let age1 = a.passed - a.year;
  let age2 = b.passed - b.year;
  return age2 - age1;
});

// console.table(yearsLivedByEach);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise
// Sort the people alphabetically by last name
const sorted = people.sort(function (a, b) {
  const [alast] = a.split(', ');
  const [blast] = b.split(', ');
  return alast > blast ? 1 : -1;
});
// console.log(sorted);

// 8. Reduce Exercise
// Sum up the instances of each of these

// prettier-ignore
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
  'bike', 'walk', 'car', 'van', 'car', 'truck'];

const instances = data.reduce((obj, veh) => {
  obj[veh] ? obj[veh]++ : (obj[veh] = 1);
  return obj;
}, {});
console.log(instances);
*/

/*
// prettier-ignore
const data1 = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
  'bike', 'walk', 'car', 'van', 'car', 'truck'];

// ARRAYS
const data2 = [...new Set(data1)];

const newdata2 = data2.with(3, 'jog');

const sortedData = data2.sort((a, b) => {
  return a > b ? 1 : -1;
});

const sortedData2 = newdata2.toSorted();
// console.log(sortedData2);

const reversedData2 = newdata2.toReversed();
// console.log(reversedData2);

const removeJog = newdata2.toSpliced(newdata2.indexOf('jog'), 1);
// console.log(removeJog);

// console.log(newdata2);

const input = [9, 2, 4, 7, 5, 6, 3];
// output = [27, 34, 32, 29, 31, 30, 33]

const output = [];
input.forEach((val, i, arr) => {
  const left = arr.slice(0, i);
  const right = arr.slice(i + 1, arr.length);
  const sum = [...left, ...right].reduce((a, v) => a + v, 0);
  output.push(sum);
});
// console.log(output);

const original = [['JS']];
const shallowCopy = original.slice(0);
const shallowCopy2 = Object.assign([], original);

const deepCopy = JSON.parse(JSON.stringify(original));
const deepCopy2 = structuredClone(original);

// shallowCopy[0].push('is great');
deepCopy[0].push('is great');
deepCopy2[0].push('is amazing');

// shallowCopy[0].push('is great');

console.log(original);
console.log(deepCopy);
console.log(deepCopy2);
// console.log(shallowCopy);
// console.log(copy);
*/

// ARRAYS

// SLice
const arr = ['a', 'b', 'c', 'd', 'e'];
const nums = [1, 2, 3, 4, 5];
// console.log(arr.slice(0, 2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -4));

// Splice
const arr2 = structuredClone(arr);
// console.log(arr2.toSpliced(0, 2, 'z'));
arr2.splice(-1);
arr2.splice(2, 0, 'e');
arr2.splice(arr2.indexOf('e'), 1);
arr2.splice(1000, 0, 'e'); //works just as push() method

arr2.unshift(1);
arr2.shift();

// console.log(arr2.toReversed());
// console.log(arr2);

const concated = arr.concat(nums);

const myName = [...'Gautam'];
const joined = myName.join('');
// console.log(joined);

// console.log(myName.at(0));

// forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// });

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// currencies.forEach((val, key, map) => {
//   console.log(`${val} (${key})`);
// });

const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopy = dogsJulia.slice(0).splice(1, 2);
  const allDogs = dogsJuliaCopy.concat(dogsKate);
  console.log(allDogs);
  allDogs.forEach((dog, i) => {
    let printThis = `Dog number ${i + 1} `;
    if (dog >= 3) printThis += `is an adult and is ${dog} years old`;
    else printThis += `is still a puppy 🐶`;
    console.log(printThis);
  });
};

// checkDogs(dogsJulia1, dogsKate1);
// checkDogs(dogsJulia2, dogsKate2);

// Map, Filter, Reduce

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const humanYears = ages.map((dog) => {
    const yrs = dog <= 2 ? dog * 2 : dog * 4 + 16;
    return yrs;
  });
  console.log(humanYears);

  const adultDogs = humanYears.filter((val) => val >= 18);
  console.log(adultDogs);

  const avgHumanAge = adultDogs.reduce((a, v, i, arr) => {
    return a + v / arr.length;
  }, 0);
  console.log(Number(avgHumanAge.toFixed(2)));
};

// calcAverageHumanAge(data1);
// calcAverageHumanAge(data2);

const calcAverageHumanAge2 = (ages) =>
  Number(
    ages
      .map((dog) => {
        const yrs = dog <= 2 ? dog * 2 : dog * 4 + 16;
        return yrs;
      })
      .filter((val) => val >= 18)
      .reduce((a, v, i, arr) => {
        return a + v / arr.length;
      }, 0)
      .toFixed(2)
  );

// console.log(calcAverageHumanAge2(data1));
// console.log(calcAverageHumanAge2(data2));

// find and findIndex
// data1 = [5, 2, 4, 1, 15, 8, 3];
const firstEven = data1.find((val) => val % 2 === 0 && val > 2);
// console.log(firstEven);
// console.log(data1.findIndex((val) => BigInt(val) / 10n > 0n));

// some and every
const moreThanTen = data1.some((val) => val > 10);
// console.log(moreThanTen);
const allNumbers = data1.every((val) => typeof val === 'number');
// console.log(allNumbers);

// flat and flatMap
const nestedArr = [[1, 2, 3], [4, 5, 6], 7, 8];
const moreNestedArr = [[1, [2, 3]], [[4, 5], 6], 7, 8];
// console.log(nestedArr.flat());
// console.log(moreNestedArr.flat(2));

// sort
const movementss = [200, 450, -400, 3000, -650, -130, 70, 1300];
const ascending = movementss.toSorted((a, b) => (a > b ? 1 : -1));
const descending = movementss.toSorted((a, b) => b - a);
// console.log(ascending);
// console.log(descending);

// with
// console.log(movementss.with(-2, 700));
// const sparseArr = [1, , 3, 5, , 4, 8];
// // console.log(sparseArr.with());
// // console.log(sparseArr.with(1, 2).with(4, 6));

// // creating and filling arrays
// function randInt(int1, int2) {
//   return int1 + Math.floor(Math.random() * (int2 - int1 + 1));
// }

// const newArr = new Array(7);

// newArr.fill(1).map((el) => randInt(1, 10));

// console.log(newArr);

// const randomArray = Array.from({ length: 10 }, () => randInt(1, 10));
// console.log(randomArray);

// const nameArray = Array.from('Gautam');
// console.log(nameArray);

const randomInts = function (num1, num2) {
  let min, max;
  if (!num2) {
    min = 0;
    max = num1;
  } else {
    min = num1;
    max = num2;
  }
  return Math.floor(Math.random() * (max - min)) + min;
};
const randomArray = Array.from({ length: 10 }, () => randomInts(50, 100));
// console.log(randomArray);

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(
  (dog) => (dog.recommendedFood = Number((dog.weight ** 0.75 * 28).toFixed(2)))
);
// console.log(dogs);

const dogEatingStatus = function (dog) {
  let str = `'s dog is eating too`;

  if (dog.owners.length > 1) {
    str = `${dog.owners.at(0)} and ${dog.owners.at(1)}` + str;
  } else {
    str = `${dog.owners.at(0)}` + str;
  }
  dog.curFood > dog.recommendedFood ? (str += ' much') : (str += ' little');
  console.log(str);
};
// dogs.forEach((dog) => dogEatingStatus(dog));

const sarahsDogEatingStatus = function () {
  const sarahsDog = dogs.find((dog) => dog.owners.includes('Sarah'));
  sarahsDog.owners = sarahsDog.owners.slice(0, 1);
  dogEatingStatus(sarahsDog);
};
// sarahsDogEatingStatus();

const ownersEatTooMuch = dogs.reduce((acc, dog) => {
  if (dog.curFood > dog.recommendedFood) acc.push(dog.owners);
  return acc;
}, []);
// console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.reduce((acc, dog) => {
  if (dog.curFood < dog.recommendedFood) acc.push(dog.owners);
  return acc;
}, []);
// console.log(ownersEatTooLittle);

// console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

// console.log(
//   dogs.some(
//     (dog) =>
//       dog.curFood >= 0.9 * dog.recommendedFood &&
//       dog.curFood <= 1.1 * dog.recommendedFood
//   )
// );

const recFood = dogs.filter(
  (dog) =>
    dog.curFood >= 0.9 * dog.recommendedFood &&
    dog.curFood <= 1.1 * dog.recommendedFood
);
// console.log(recFood);

const dogsCopy = [...dogs];
const sortDogs = dogsCopy.sort((a, b) =>
  a.recommendedFood > b.recommendedFood ? 1 : -1
);

// OOP
const coolArray = Array.from({ length: 20 }, () => randomInts(100));
// console.log(coolArray);

const Person = function (name, birthYear) {
  this.firstName = name;
  this.year = birthYear;
  // console.log(
  //   `new instance created from ${Person.name} constructor function: `,
  //   this
  // );
};

Person.prototype.calcAge = function () {
  return new Date().getFullYear() - this.year;
};
// console.log(Person.prototype);

const gautam = new Person('Gautam', 1988);
// console.log(gautam);
// console.log(gautam.calcAge());
// console.log(gautam instanceof Person); // true
// console.log(gautam instanceof Object); // true
// console.log(typeof gautam); // object
// console.log(gautam.__proto__ === Person.prototype);
// console.log(gautam.__proto__ === gautam.constructor.prototype);
// console.table(gautam.__proto__);
// console.table(Person.prototype);
// console.dir(gautam.constructor);
// console.log(gautam.constructor === Person); // true
// console.dir(gautam.constructor.name); // Person

Person.prototype.species = 'Homo Sapiens';
// console.log(gautam.species);
// console.log(gautam.hasOwnProperty('species')); // false
// console.log(gautam.hasOwnProperty('firstName')); // true
// console.log(gautam.hasOwnProperty('calcAge')); // false

const matilda = new Person('Matilda', 1995);
// console.log(matilda.calcAge());

// console.log(Person.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__);
// console.dir(Object.constructor);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} speed increased to ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} speed decreased to ${this.speed}`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.brake();
// bmw.brake();
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

// mercedes.accelerate();
// mercedes.brake();

const Chips = function (brand, flavour, price) {
  this.brand = brand;
  this.flavour = flavour;
  this.price = price;
};

Chips.prototype.discountedPrice = function () {
  return this.price * 0.9;
};

const lays = new Chips('Lays', 'Cream and Onion', 20);
// console.log(lays);
// console.log(lays.discountedPrice());

// Prototypes
// console.table(Person.prototype);
// console.log(typeof Person.prototype); // object
// console.log(gautam.__proto__ === Person.prototype); // true
// console.log(Person.isPrototypeOf(gautam)); // false
// console.log(Person.prototype.isPrototypeOf(gautam)); // true
// console.log(gautam.hasOwnProperty('species')); // false
// console.log(Person.prototype.hasOwnProperty('species')); // true
// console.dir(gautam.constructor);
// console.dir(Person.prototype.constructor);
// console.dir(gautam.constructor.prototype.__proto__);

// console.dir(gautam.__proto__.__proto__); // Object.prototype
// console.log(gautam.__proto__.__proto__ === Object.prototype);

// console.log(gautam.__proto__.__proto__.__proto__); // null

// console.dir(Person.prototype.constructor);

// console.dir(Function);

const randomArr = Array.from({ length: 7 }, () => randomInts(20));
// console.log(randomArr.__proto__ === Array.prototype); // true
// console.dir(randomArr.__proto__); //Array.prototype
// console.dir(randomArr.__proto__.__proto__); //Object.prototype

Array.prototype.unique = function () {
  return [...new Set(this)];
};

const foo = [3, 5, 3, 6, 1, 7, 6, 2, 9, 7, 8, 3, 8];
// console.log(foo.unique());

const h1 = document.querySelector('h1');
// console.dir(h1); // check

// console.dir((x) => x+1);

// ES6 Classes
class PersonCl {
  constructor(name, yr) {
    this.firstName = name;
    this.birthYear = yr;
  }

  // prototype methods/properties
  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  hello() {
    console.log(`${this.firstName} says "Hello"`);
  }
}

PersonCl.prototype.greet = function () {
  console.log(`${this.firstName} says "HI"`);
};

const jessica = new PersonCl('Jessica', 1995);
// console.log(jessica);
// console.log(jessica.calcAge());
// jessica.greet();

// console.log(jessica.__proto__ === PersonCl.prototype);
// console.dir(jessica.__proto__);

// Getters and Setters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, -300],

  get latest() {
    return this.movements.at(-1);
  },

  set latest(val) {
    this.movements.push(val);
  },
};

// console.log(account.latest);
account.latest = 500;
// console.log(account.latest);

class PersonCl2 {
  constructor(firstName, yr, fullName) {
    this.firstName = firstName;
    this.birthYear = yr;
    this.fullName = fullName;
  }

  static foo() {
    return this.name;
  }

  // prototype methods/properties
  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  hello() {
    console.log(`${this.firstName} says "Hello"`);
  }

  get age() {
    return this.calcAge();
  }

  set age(age) {
    this.birthYear = new Date().getFullYear() - age;
  }

  set fullName(name) {
    // console.log(name);
    if (!name) return;
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a valid full-name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log(`Hey from ${this.name} 👋`);
  }
}

const amy = new PersonCl2('Amy', 1991, 'Amy Santiago');

// console.log(amy.age);
amy.age = 40;
// console.log(amy.age);

// console.log(amy.fullName);

// console.log(amy);

const jake = new PersonCl2('jake', 1980, 'Jake Peralta');
// console.log(jake.fullName);

// Static Methods
const heading = Array.from(document.getElementsByTagName('h1'));
// console.log(heading);

// PersonCl2.hey();

// Object.create

const PersonProto = {
  info(name, yr) {
    this.firstName = name;
    this.birthYear = yr;
  },

  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },
};

const person1 = Object.create(PersonProto);
person1.info('Gautam', 1988);
// person1.name = 'Gautam';
// console.log(person1);
// person1.calcAge();

// console.log(person1.__proto__ === PersonProto);

const person2 = Object.create(PersonProto);
person2.info('Sarah', 1986);
// person2.calcAge();
// console.log(person2);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} speed increased to ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} speed decreased to ${this.speed}`);
// };

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} speed increased to ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} speed decreased to ${this.speed}`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(spd) {
    this.speed = spd * 1.6;
    console.log(`${this.make} now going at ${spd}mph (${this.speed}kmph)`);
  }
}

const ford = new CarCl('Ford', 120);

// console.log(ford);
// ford.accelerate();
// ford.brake();
// console.log(ford.speedUS);
// ford.speedUS = 100;
// ford.speedUS = 50;

const Car2 = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car2.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} speed increased to ${this.speed}`);
};

Car2.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} speed decreased to ${this.speed}`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car2.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`Battery charged to ${this.charge}%`);
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} speed increased to ${this.speed} and charge reduced to ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
// console.log(tesla);

// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(70);
// tesla.accelerate();
// tesla.brake();
// tesla.brake();

// Inheritance between "Classes": Constructor Functions
const Human = function (name, birthYear) {
  this.firstName = name;
  this.birthYear = birthYear;
};
Human.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

const Student = function (name, birthYear, course) {
  Human.call(this, name, birthYear);
  this.course = course;
};
Student.prototype = Object.create(Human.prototype);

Student.prototype.introduce = function () {
  console.log(`Hi, I'm ${this.firstName} and I study ${this.course}`);
};

const jenny = new Student('Jenny', 1996, 'CS');
// console.log(jenny);
// jenny.introduce();
// jenny.calcAge();

// console.log(jenny.__proto__.__proto__ === Human.prototype); // true

// console.dir(Student.prototype.constructor); // Human - need to fix this
Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor); // Student

// console.log(jenny instanceof Human); // true
// console.log(jenny instanceof Student); // true - because of the inheritance we manually set using Object.create()

// Inheritance between ES6 Classes
class HumanCl {
  constructor(name, birthYear) {
    this.firstName = name;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }
}

// class StudentCl extends HumanCl {}

class StudentCl extends HumanCl {
  constructor(name, birthYear, course) {
    super(name, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} and I study ${this.course}`);
  }

  calcAge() {
    const age = new Date().getFullYear() - this.birthYear;
    console.log(`I'm ${age} years old`);
  }
}

// const penny = new StudentCl('Penny', 1985);
const penny = new StudentCl('Penny', 1985, 'History');
// console.log(penny);
// penny.introduce();
// penny.calcAge();

const Person_Proto = {
  info(name, yr) {
    this.firstName = name;
    this.birthYear = yr;
  },

  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },
};

const steven = Object.create(Person_Proto);

const Student_Proto = Object.create(Person_Proto);
Student_Proto.init = function (name, yr, course) {
  Person_Proto.info.call(this, name, yr);
  this.course = course;
};

// console.log(Student_Proto);

const jay = Object.create(Student_Proto);
jay.init('Jay', 1998, 'Arts');
jay.introduce = function () {
  console.log(`Hi I'm ${this.firstName} and I study ${this.course}`);
};
// console.log(jay);
// jay.introduce();
// jay.calcAge();

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
  }

  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  get balance() {
    return this.movements.reduce((a, v) => a + v, 0);
  }

  approveLoan(val) {
    if (this.balance > val) return true;
    else return false;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    } else {
      alert(`Loan rejected`);
    }
  }
}

const account1 = new Account('Gautam', 'INR', 1111);
// console.log(account1);
account1.deposit(2000);
account1.withdraw(300);
// console.log(account1);
// account1.requestLoan(1000);
// account1.requestLoan(5000);

class Account_Pvt {
  // Public fields
  locale = navigator.language;

  // Private fields
  #pin;
  #movements = [];

  // Public static field
  static className = this.name;

  // Private static field
  static #superSecretNumber = 44;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.#movements = [];
    // this.locale = navigator.language;
  }

  // Public static method
  static foo() {
    return this.#superSecretNumber * 2;
  }

  // Public method (API)
  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  get balance() {
    return this.#movements.reduce((a, v) => a + v, 0);
  }

  // Private method
  #approveLoan(val) {
    if (this.balance > val) return true;
    else return false;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    } else {
      alert(`Loan rejected`);
    }
  }

  getMovements() {
    return this.#movements;
  }
}

const acc2 = new Account_Pvt('Jonas', 'USD', 2222);
acc2.deposit(3000);
acc2.withdraw(450);
// console.log(acc2);
// console.log(acc2.getMovements());
// console.log(acc2.#movements); // private field cannot be accessed
// console.log(acc2.#pin); // private field cannot be accessed
// acc2.#approveLoan(100); // private method cannot be accessed
// console.log(Account_Pvt.className);
// console.log(Account_Pvt.foo());
// console.log(Account.#superSecretNumber); // private static field cannot be accessed

class CarCl2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} speed increased to ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} speed decreased to ${this.speed}`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(spd) {
    this.speed = spd * 1.6;
    console.log(`${this.make} now going at ${spd}mph (${this.speed}kmph)`);
  }
}

class EVCl extends CarCl2 {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 10;
    this.#charge--;
    this.#status(this.speed, this.#charge);
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    this.#status(this.speed, this.#charge);
    return this;
  }

  brake() {
    this.speed -= 5;
    this.#status(this.speed, this.#charge);
    return this;
  }

  #status(speed, charge) {
    console.log(
      `${this.make} going at ${speed}kmph, with a charge of ${charge}%`
    );
  }
}

// console.dir(EVCl);
const rivian = new EVCl('Rivian', 120, 23);
// console.log(rivian);
// rivian.accelerate().accelerate().brake().chargeBattery(70).brake();

// ASYNCHRONOUS JS

// https://restcountries.com/v3.1/name/{name}
// https://restcountries.com/v3.1/alpha/{code}

const countriesContainer = document.querySelector('.countries');

const getCountryData = function (country) {
  const countryStr = country.toLowerCase();

  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${countryStr}`);
  request.send(); // asynchronous

  request.addEventListener('load', function (e) {
    // console.log(this);
    // console.log(this.responseText);
    // console.log(e);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    renderCountry(data);
  });
};
// getCountryData('india');

const renderCountry = function (data, className = '') {
  const languages = Object.values(data.languages);
  const [currency] = Object.values(data.currencies);

  const cardHTML = `<article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${Math.round(
      data.population / 1000000
    )}M people</p>
    <p class="country__row"><span>🗣️</span>${languages.join(', ')}</p>
    <p class="country__row"><span>💰</span>${currency.name}</p>
   </div>
   </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', cardHTML);
  // countriesContainer.style.opacity = 1;
};

function renderError(errMsg) {
  countriesContainer.insertAdjacentText('beforeend', errMsg);
  // countriesContainer.style.opacity = 1;
}

const renderNoNeighbour = function (msg) {
  const p = document.createElement('p');
  if (!msg) p.textContent = 'No neighbours for this country';
  else p.textContent = msg;
  countriesContainer.insertAdjacentElement('beforeend', p);
  p.style.alignSelf = 'center';
};

const getCountryAndNeighbours = function (country) {
  const countryStr = country.toLowerCase();

  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${countryStr}`);
  request.send(); // asynchronous

  request.addEventListener('load', function (e) {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    const neighbours = data.borders;

    neighbours
      ? neighbours.forEach((nei) => {
          const request = new XMLHttpRequest();
          request.open('GET', `https://restcountries.com/v3.1/alpha/${nei}`);
          request.send();
          request.addEventListener('load', function (e) {
            const [data] = JSON.parse(this.responseText);
            renderCountry(data, 'neighbour');
          });
        })
      : renderNoNeighbour();
  });
};

// getCountryAndNeighbours('germany');

// callback hell
// setTimeout(() => {
//   console.log(`1 second passed`);
//   setTimeout(() => {
//     console.log(`2 seconds passed`);
//     setTimeout(() => {
//       console.log(`3 seconds passed`);
//       setTimeout(() => {
//         console.log(`4 seconds passed`);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// PROMISES and FETCH API

// `https://restcountries.com/v3.1/name/${country}`

const getCountryDataUsingFetch = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => renderCountry(data.at(0)));
};
// getCountryDataUsingFetch('india');

// helper functions
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then((response) => {
    // console.log(response);
    if (response.ok) return response.json();
    else
      throw new Error(
        `${errorMsg} [${response.status}: ${response.statusText}]`
      );
  });
};

const getCountryAndNeighbourUsingFetch = function (country) {
  // Main Country
  // https://restcountries.com/v3.1/name/${country}

  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    `Please check country name again`
  )
    .then((data) => {
      const [country] = data;
      console.log(country);
      renderCountry(country);

      const neighbour = country.borders?.at(0);
      // const neighbour = 'fdfsdf';
      console.log(neighbour);
      if (!neighbour) {
        throw new Error(`No neighbours for this country 🚶‍♂️`);
      }
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        `Neighbour country not found`
      );
    })
    .then((data) => renderCountry(data.at(0), 'neighbour'))
    .catch((error) => {
      console.error(error.message + ' 😥');
      renderError(error);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// getCountryAndNeighbourUsingFetch('japan');

// `https://restcountries.com/v3.1/alpha/{code}`

const btn = document.querySelector('.btn-country');
// btn.addEventListener(
//   'click',
//   getCountryAndNeighbourUsingFetch.bind(this, 'usa')
// );

// Coding Challenge

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// https://api.geoapify.com/v1/geocode/reverse?lat=15.8855428&lon=74.5111606&apiKey=89d2928e116048bd899b3aa460df4f5e

function latLngCheck(lat, lng) {
  // console.log(lat, lng);
  if (lat && lng) {
    return fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=89d2928e116048bd899b3aa460df4f5e`
    );
  } else {
    return getPosition().then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=89d2928e116048bd899b3aa460df4f5e`
      );
    });
  }
}

const whereAmI = function (lat, lng) {
  latLngCheck(lat, lng)
    .then((res) => res.json())
    .then((data) => {
      const { country, city } = data.features.at(0).properties;
      console.log(`You are in ${city}, ${country}`);
      return getJSON(`https://restcountries.com/v3.1/name/${country}`);
    })
    .then((data) => {
      // console.log(data.at(0));
      renderCountry(data.at(0));
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// whereAmI();
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=89d2928e116048bd899b3aa460df4f5e`)

// const myLocation = function () {
//   navigator.geolocation.getCurrentPosition((pos) => {
//     const { latitude, longitude } = pos.coords;
//     whereAmI(latitude, longitude);
//   });
// };
// myLocation();

// console.log(`start`);
// setTimeout(() => {
//   console.log(`timer end`);
// }, 800);
// fetch(`https://restcountries.com/v3.1/name/india`).then((res) =>
//   console.log(res)
// );
// console.log(`end`);

// console.log(`1. start`);
// setTimeout(() => {
//   console.log(`5. timer callback`);
// }, 0);
// Promise.resolve(`Promise microtask 1`).then((res) => {
//   console.log(`3. ${res}`);
// });
// Promise.resolve(`Promise microtask 2`).then((res) => {
//   for (let i = 0; i < 10000000000; i++) {
//     continue;
//   }
//   console.log(`4. ${res}`);
// });
// console.log(`2. end`);

// Building a Promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log(`Lottery draw in progress...`);

//   setTimeout(() => {
//     const val = Math.random().toFixed(2);
//     if (val >= 0.5) {
//       resolve(`You win ${val} 👍`);
//     } else {
//       reject(new Error(`You lose ${val} 👎`));
//     }
//   }, 2000);
// });

// // lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// Promisifying a settimeout function

// function wait(seconds) {
//   return new Promise(function (resolve) {
//     resolve(
//       setTimeout(() => seconds),
//       seconds * 1000
//     );
//   });
// }

// console.log(wait());

// wait(2).then((res) => console.log(res));

// function wait2(seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve(seconds), seconds * 1000);
//   });
// }

// wait2(5).then((res) => console.log(res));

function wait(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}

// wait(2)
//   .then((res) => {
//     console.log(res);
//     return wait(1);
//   })
//   .then((res) => console.log(res));

// Promise.resolve('abc ✅').then((res) => console.log(res));
// Promise.reject(new Error('abc 🛑')).catch((err) => console.error(err));

// Promisifying Geolocation

// navigator.geolocation.getCurrentPosition(
//   (pos) => console.log(pos),
//   (err) => console.log(`${err.message} 🚫`)
// );
// console.log(`Getting Position...`);

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => resolve(position),
//       (error) => reject(error)
//     );
//   });
// };

// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// getPosition().then((res) => console.log(res));

// Coding Challenge

const images = document.querySelector('.images');
let currentImage;

// function createImg(imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       images.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error(`Image could not be loaded 👎`));
//     });
//   });
// }

function showAndHideImages() {
  createImg('img/img-1.jpg')
    .then((img) => {
      currentImage = img;
      console.log('Image 1 loaded:', currentImage);
      return wait(2);
    })
    .then(() => {
      currentImage.style.display = 'none';
      console.log(`Image 1 hidden`);
      return createImg(`img/img-2.jpg`);
    })
    .then((img) => {
      currentImage = img;
      console.log('Image 2 loaded:', currentImage);
      return wait(2);
    })
    .then(() => {
      currentImage.style.display = 'none';
      console.log(`Image 2 hidden`);
    })
    .catch((err) => {
      const errorElement = document.createElement('h3');
      errorElement.textContent = err.message;
      images.append(errorElement);
    });
}

// showAndHideImages();

// Async-Await

const whereAmI2 = async function (lat, lng) {
  const latsAndLngs = await latLngCheck(lat, lng);
  const { features } = await latsAndLngs.json();
  const { country, city } = features.at(0).properties;
  console.log(`You are in ${city}, ${country}`);
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${country}`
  );
  // console.log(response);
  const data = await response.json();
  renderCountry(data.at(0));
  countriesContainer.style.opacity = 1;
};

// whereAmI2();
// console.log(`Getting location...`);
// whereAmI2(-33.933, 18.474);

// Handling errors with try...catch
const whereAmI3 = async function (lat, lng) {
  try {
    const latsAndLngs = await latLngCheck(lat, lng);
    // const latsAndLngs = { ok: false };
    console.log(latsAndLngs);
    if (!latsAndLngs.ok) throw new Error(`Something went wrong 😥`);
    const { features } = await latsAndLngs.json();
    // const { country, city } = features.at(0).properties;
    // console.log(`You are in ${city}, ${country}`);
    const country = 'fdsfds';
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    console.log(response);
    if (!response.ok)
      throw new Error(`Could not get the country 😥 ${response.status}`);
    const data = await response.json();
    renderCountry(data.at(0));
    countriesContainer.style.opacity = 1;
  } catch (error) {
    console.error(error);
    renderError(error);
    countriesContainer.style.opacity = 1;
  }
};
// whereAmI3();
// console.log(`Getting location...`);

// Getting values from async function
const whereAmI4 = async function (lat, lng) {
  try {
    const latsAndLngs = await latLngCheck(lat, lng);
    // const latsAndLngs = { ok: false };
    if (!latsAndLngs.ok) throw new Error(`Something went wrong 😥`);
    const { features } = await latsAndLngs.json();
    // const { country, city } = features.at(0).properties;
    // console.log(`You are in ${city}, ${country}`);
    const country = 'fdsfds';
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    if (!response.ok)
      throw new Error(`Could not get your location 😥 ${response.status}`);
    const data = await response.json();
    renderCountry(data.at(0));
    countriesContainer.style.opacity = 1;

    return `You are in ${city}, ${country}`;
  } catch (error) {
    console.error(error);
    renderError(error);
    countriesContainer.style.opacity = 1;
    throw error;
  }
};
// whereAmI4();

/*
console.log(`1. Getting location...`);
// const city = whereAmI4();
// console.log(city);
whereAmI4()
  .then((city) => console.log(`2. ${city}`))
  .catch((err) => console.error(`2. ${err.message}`))
  .finally(() => console.log(`3. Finished.`));
// console.log(`3. Finished.`);
*/

// (async function () {
//   try {
//     const city = await whereAmI4();
//     console.log(city);
//   } catch (error) {
//     console.error(error.message);
//   }
// })();

// Promises in Parallel

// the ajax calls happen one after another, which is slow
const get3Countries = async function (c1, c2, c3) {
  try {
    const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    const [capital1] = data1.capital;
    const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    const [capital2] = data2.capital;
    const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    const [capital3] = data3.capital;
    console.log(capital1, capital2, capital3);
  } catch (error) {
    console.error(error);
  }
};
// get3Countries('portugal', 'japan', 'ireland');

// using Promise.all()
const getCapitalsAll = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.flatMap((c) => c.at(0).capital));
  } catch (error) {
    console.error(error);
  }
};

// getCapitalsAll('portugal', 'japan', 'india');
// getCapitalsAll('portugal', 'japan', 'fdfdsfs');

// race, any, allSettled

// race
const getCapitalsRace = async function (c1, c2, c3) {
  try {
    const data = await Promise.race([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.at(0));
  } catch (error) {
    console.error(error);
  }
};

// getCapitalsRace('portugal', 'japan', 'australia');
// getCapitalsRace('portugal', 'dfdfsd', 'australia');

const timeout = async function (seconds) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`request took too long ⏳`));
    }, seconds * 1000);
  });
};

const getCapitalsRace2 = async function (c1, c2, c3) {
  try {
    const data = await Promise.race([
      timeout(0.5),
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.at(0));
  } catch (error) {
    console.error(error);
  }
};
// getCapitalsRace2('portugal', 'japan', 'australia');

// allSettled
const getCapitalsAllSettled = async function (c1, c2, c3) {
  try {
    return await Promise.allSettled([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    // console.log(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
// getCapitalsAllSettled('portugal', 'fdfdfsd', 'australia')
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// any
const getCapitalsAny = async function (c1, c2, c3) {
  try {
    const data = await Promise.any([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.at(0));
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// getCapitalsAny('portugal', 'india', 'australia');
// getCapitalsAny('fdfds', 'fdsfds', 'fdsfds');

////////////////////////////////////////////////////////////////////

// const images = document.querySelector('.images');
// let currentImage;

// function showAndHideImages() {
//   createImg('img/img-1.jpg')
//     .then((img) => {
//       currentImage = img;
//       console.log('Image 1 loaded:', currentImage);
//       return wait(2);
//     })
//     .then(() => {
//       currentImage.style.display = 'none';
//       console.log(`Image 1 hidden`);
//       return createImg(`img/img-2.jpg`);
//     })
//     .then((img) => {
//       currentImage = img;
//       console.log('Image 2 loaded:', currentImage);
//       return wait(2);
//     })
//     .then(() => {
//       currentImage.style.display = 'none';
//       console.log(`Image 2 hidden`);
//     })
//     .catch((err) => {
//       const errorElement = document.createElement('h3');
//       errorElement.textContent = err.message;
//       images.append(errorElement);
//     });
// }

const imgContainer = document.querySelector(`.images`);

function createImg(imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      images.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error(`Image could not be loaded 👎`));
    });
  });
}

// Coding Challenge
// load img1 - wait 2 seconds - hide img - load img2 - wait 2 sec - hide img
async function loadNPause() {
  try {
    let img = await createImg('img/img-1.jpg');
    console.log(`Image 1 loaded:`, img);
    await wait(2);
    img.style.display = 'none';
    console.log(`Image 1 hidden`);
    img = await createImg('img/img-2.jpg');
    console.log(`Image 2 loaded:`, img);
    await wait(2);
    img.style.display = 'none';
    console.log(`Image 2 hidden`);
  } catch (error) {
    console.error(error);
    renderError(error);
  }
}
// loadNPause();

async function loadAll(imgArr) {
  // const imgs = imgArr.map((img) => createImg(img));
  // const imgs = imgArr.map(async (img) => await createImg(img));
  const imgPromises = imgArr.map(async function (img) {
    return await createImg(img);
  });
  console.log(imgPromises);
  const imgElements = await Promise.all(imgPromises);
  console.log(imgElements);
  imgElements.forEach((im) => im.classList.add('parallel'));
}

// loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
