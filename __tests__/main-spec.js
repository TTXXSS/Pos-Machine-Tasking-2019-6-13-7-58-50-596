const main = require('../main');
const printReceipt = main.printReceipt;
const isItemExist= main.isItemExist;
const getItemInformation=main.getItemInformation;
const itemArray = ['0001', '0003', '0005', '0003'];
const database = [{ "id": "0001", "name": "Coca Cola", "price": 3 },
{ "id": "0002", "name": "Diet Coke", "price": 4 },
{ "id": "0003", "name": "Pepsi-Cola", "price": 5 },
{ "id": "0004", "name": "Mountain Dew", "price": 6 },
{ "id": "0005", "name": "Dr Pepper", "price": 7 },
{ "id": "0006", "name": "Sprite", "price": 8 },
{ "id": "0007", "name": "Diet Pepsi", "price": 9 },
{ "id": "0008", "name": "Diet Mountain Dew", "price": 10 },
{ "id": "0009", "name": "Diet Dr Pepper", "price": 11 },
{ "id": "0010", "name": "Fanta", "price": 12 }
];

it('verify item valid', () => {
    expect(printReceipt(itemArray,database)).toEqual("Receipts\n------------------------------------------------------------\n"+
    "Coca Cola 3 1\n"+
    "Pepsi-Cola 5 2\n"+
    "Dr Pepper 7 1\n"+
    "------------------------------------------------------------\n"+
    "Price: 20");
});

// it('get item information item id', () => {
//     expect(getItemInformation(itemArray,database)).toEqual(    [ { name: 'Coca Cola', price: 3, number: 1 },
//     { name: 'Pepsi-Cola', price: 5, number: 2 },
//     { name: 'Dr Pepper', price: 7, number: 1 } ]);
// });
// it('match successfully', () => {
//     expect(printReceipt(['0001', '0003', '0005', '0003'], [
//         { "id": "0001", "name": "Coca Cola", "price": 3 },
//         { "id": "0002", "name": "Diet Coke", "price": 4 },
//         { "id": "0003", "name": "Pepsi-Cola", "price": 5 },
//         { "id": "0004", "name": "Mountain Dew", "price": 6 },
//         { "id": "0005", "name": "Dr Pepper", "price": 7 },
//         { "id": "0006", "name": "Sprite", "price": 8 },
//         { "id": "0007", "name": "Diet Pepsi", "price": 9 },
//         { "id": "0008", "name": "Diet Mountain Dew", "price": 10 },
//         { "id": "0009", "name": "Diet Dr Pepper", "price": 11 },
//         { "id": "0010", "name": "Fanta", "price": 12 }
//     ])).toBe("Coca Cola " + "3 " + "1\n" +
//         "Pepsi-Cola " + "5 " + "2\n" +
//         "Dr Pepper " + "7 " + "1\n");
// });



