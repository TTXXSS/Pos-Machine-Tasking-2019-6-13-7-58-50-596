function isItemExist(itemArray,database){
    var itemExist = new Array(itemArray.length);
    for(let k=0;k<itemExist.length;k++)
    itemExist=false;
for(let i=0;i<itemArray.length;i++)
for(let j=0;j<database.length;j++){
if(itemArray[i]===database[j].id)
itemExist[i]=true;
}
return itemExist;
}

function getReceipt(itemArray,database){

  var receipt=[];
        for(let k=0;k<database.length;k++) {
            var count=0;
            for(let j=0;j<itemArray;j++){
            if(itemArray[j]===database[k].id){
              count++;
              receipt.push({name:database[k].name,price:database[k].price,number:count});
            }
        }
       

    }
    return receipt;
    

    
}

function printReceipt(itemArray,database){
    var itemExist=isItemExist(itemArray,database);
    var receiptArray=[];
    var tip;
    var receipt='';
    for(let i=0;i<itemExist.length;i++){
        if(itemExist[i]===false)
        tip="error";
    }
    if(tip==="error")
    return (tip);
    else{
    receiptArray=getReceipt(itemArray,database);
    for(let j=0;j<receiptArray.length;j++){
        receipt+=(receiptArray[j].name+"  "+receiptArray[j].price+" "+receiptArray[j].number+"\n");
    }
    return receipt;
    }
}
module.exports = {isItemExist,getReceipt,printReceipt};