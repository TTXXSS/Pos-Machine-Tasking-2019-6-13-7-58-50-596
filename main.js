function isItemExist(itemArray, database) {
    var itemExist = new Array(itemArray.length);
    for (let k = 0; k < itemExist.length; k++)
        itemExist[k] = false;
    for (let i = 0; i < itemArray.length; i++)
        for (let j = 0; j < database.length; j++) {
            if (itemArray[i] === database[j].id) {
                itemExist[i] = true;
                break;
            }
        }
    return itemExist;
}

function getReceipt(itemArray, database) {

    let receiptArray = [];
    var getReceipt = [];
    for (let k = 0; k < database.length; k++) {
        var count = 0;
        for (let j = 0; j < itemArray; j++) {
            if (itemArray[j] === database[k].id) {
                count++;
                receiptArray.push({ name: database[k].name, price: database[k].price, number: count });
            }
        }

    }
    for (let j = 0; j < receiptArray.length; j++) {
        if (getReceipt.indexOf(receiptArray[j].name) < 0) {
            getReceipt.push(receiptArray[j]);
        } else {
            getReceipt[getReceipt.indexOf(receiptArray[j].name)].number++;
        }
    }
    return receiptArray;

}

function printReceipt(itemArray, database) {
    var itemExist = isItemExist(itemArray, database);
    var receiptArray = [];
    var tip;
    var receipt = '';
    for (let i = 0; i < itemExist.length; i++) {
        if (itemExist[i] === false)
            tip = "error";
    }
    if (tip === "error")
        return (tip);
    else {
        receiptArray = getReceipt(itemArray, database);
        for (let j = 0; j < receiptArray.length; j++) {
            receipt += (receiptArray[j].name + " " + receiptArray[j].price + " " + receiptArray[j].number + "\n");
        }
        return receiptArray;
    }
}

function filterLengthByCondition(condition){
 
}


module.exports = { isItemExist, getReceipt, printReceipt};