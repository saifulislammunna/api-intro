// JavaScript object Notation
// JSON
const user = {id: 11, name: 'Gorib Amir',};
const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified );

const shop = {
    name: 'Alia Store',
    address: 'Ranbir road',
    profit: 15000,
    owner:{
        name : 'Alia Bhatt',
        profession: 'actor'
    },
    products: ['laptop', 'mobile', 'pepsi'],
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified );
const converted = JSON.parse(shopStringified);
console.log(converted.owner);