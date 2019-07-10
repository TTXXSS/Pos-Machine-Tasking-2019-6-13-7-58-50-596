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

function getItemInformation(itemArray, database) {

    let receiptArray = [];
    var getReceipt = [];
    for (let k = 0; k < database.length; k++) {
        //console.log("684654654654");
        for (let j = 0; j < itemArray.length; j++) {
            //console.log("684654654654");
            if (itemArray[j] === database[k].id) {
                receiptArray.push({ name: database[k].name, price: database[k].price, number: 1 });
            }
        }

    }
   // console.log(receiptArray);
    for(let i=0;i<receiptArray.length;i++)
    for(let j=i+1;j<receiptArray.length;j++){
        if(receiptArray[j].name===receiptArray[i].name){
            //console.log(receiptArray[j].name);
            receiptArray.splice(j,1);
            receiptArray[i].number++;
        }
    }
    console.log(receiptArray);
    return receiptArray;

}

function printReceipt(itemArray, database) {
    var itemExist = isItemExist(itemArray, database);
    var receiptArray = [];
    var tip;
    var sum=0;
    var receipt ="Receipts\n------------------------------------------------------------\n";
    for (let i = 0; i < itemExist.length; i++) {
        if (itemExist[i] === false)
            tip = "error";
    }
    if (tip === "error")
        return (tip);
    else {
        receiptArray = getItemInformation(itemArray, database);
        for (let j = 0; j < receiptArray.length; j++) {
            sum+=(receiptArray[j].price*receiptArray[j].number);
            receipt += (receiptArray[j].name + " " + receiptArray[j].price + " " + receiptArray[j].number + "\n");
        }
        receipt+="------------------------------------------------------------\nPrice: "+sum;
        return receipt;
    }
}

function filterLengthByCondition(condition) {

}


module.exports = { isItemExist, getItemInformation, printReceipt };