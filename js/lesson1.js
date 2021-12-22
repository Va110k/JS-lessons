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

console.table(friends);

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
