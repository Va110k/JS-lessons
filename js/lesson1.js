// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Нашли число 3, прерываем выполнение цикла");
//     break;
//   }
// }

// console.log("Лог после цикла");

//
// const namber = 10;

// for (let i = 0; i < namber; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
// }
//

// const newArray = {
//   family: ["Nikita", "Natasha", "Valera", "ergdffbfb"],
//   flatNumber: 3,
//   rooms: ["bathroom, kitchen, badroom"],

//   addName(newName) {
//     this.family.push(newName);
//     this.flatNumber = this.family.length;
//   },

//   // changeNumber(newNumber) {
//   //   this.flatNumber = newNumber;
//   // },
// };

// newArray.addName("Douther");

// // newArray.changeNumber(23);

// console.log(newArray);

const feedback = {
  good: 5,
  neutral: 4,
  bad: 3,
};

let totalFeedback = 0;

// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys) {
//   console.log(feedback[key]);

//   totalFeedback += feedback[key];
// }

// console.log("Итого:", totalFeedback);

const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//   // console.log(value);

//   totalFeedback += value;
// }
// console.log("итого:", totalFeedback);

/*
 * Работа с коллекцией (массивом объектов)
 */
const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];

// console.table(friends);

// for (const friend of friends) {
//   console.log(friend);

//   friend.newprop = 555;
// }

// console.table(friends);

const findFriendByName = function (allFriends, name) {
  //   for (const friend of allFriends) {
  //     console.log(friend);
  //     console.log(friend.name === name);
  //     if (friend.name === name) {
  //       return "Нашли!!!";
  //     }
  //   }
};

// console.log(findFriendByName(friends, "Poly"));

const getAllNames = function (allFriends) {
  const allNamesArray = [];
  for (const friend of allFriends) {
    console.log(friend.name);
    allNamesArray.push(friend.name);
  }
  return allNamesArray;
  // console.log(allNamesArray);
};

// console.log(getAllNames(friends));

const getOnlineFriends = function (allFriends) {
  const friendsStatusArray = [];
  for (const friend of allFriends) {
    // console.log(friend.online);
    if (!friend.online) {
      friendsStatusArray.push(friend);
    }
  }
  return friendsStatusArray;
};

// console.log(getOnlineFriends(friends));

/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {},
  add(product) {},
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

// console.table(cart.getItems());

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍓", price: 110 });

// console.table(cart.getItems());

cart.remove("🍎");
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// let balance = 10000;
// const payment = 20000;

// console.log(
//   `Общая стоимость заказа ${payment} кредитов. Проверяем количество доступных средств на счету...`
// );

// if (payment <= balance) {
//   console.log(`Все хорошо! Снимаем деньги...`);
//   balance -= payment;
//   console.log(`На счету осталось ${balance} кредитов.`);
// } else console.log("На счету недостаточно средств для совершения операции!");
// console.log("Операция завершена!");

// let password = "";

// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// Выносим варианты в массив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// } else {
//   console.log(`${fruit} is a сука fruit!`);
// }

//lesson 4

// // 1. Объявление параметров x, y, z
// function multiply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }

// // 2. Передача аргументов
// multiply(2, 3, 5); // Результат умножения равен 30
// multiply(4, 8, 12); // Результат умножения равен 384
// multiply(17, 6, 25); // Результат умножения равен 2550

// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1

// function fnA() {
//   console.log("Лог внуртри функции fnA до вызова fnB");
//   fnB();
//   console.log("Лог внуртри функции fnA после вызова fnB");
// }

// function fnB() {
//   console.log("Лог внутри функции fnB");
// }

// console.log("Лог перед вызовом fnA");
// fnA();
// console.log("Лог после вызова fnA");

// // "Лог перед вызовом fnA"
// // "Лог внуртри функции fnA до вызова fnB"
// // "Лог внутри функции fnB"
// // "Лог внуртри функции fnA после вызова fnB"
// // "Лог после вызова fnA"

// function bar() {
//   console.log("bar");
// }

// function baz() {
//   console.log("baz");
// }

// function foo() {
//   console.log("foo");
//   bar();
//   baz();
// }

// foo();

function countProps(object) {
  let propCount = 0;
  // Change code below this line
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount = key.length;
    }
  }
  // Change code above this line
  return propCount;
}
