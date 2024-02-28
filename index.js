function myEach(arrobj, alert){
    let newarr = Object.values(arrobj);
for (let i=0; i<newarr.length; i++){
    alert(newarr[i]);
}
return arrobj;
};

function myMap(arrobj, callback){
    let newarr = Object.values(arrobj);
    let arrobj1=[];
    for (let i=0; i<newarr.length; i++){
        arrobj1[i]=callback(newarr[i]);
    }
    return arrobj1;
    };

function myReduce(collection, callback, acc){
    let newarr = Object.values(collection);
    if (acc == null){
        acc=newarr[0];
        for (let i=1; i<newarr.length; i++){
            acc = callback(acc, newarr[i], newarr);
    }}
    else {
    for (let i=0; i<newarr.length; i++){
        acc = callback(acc, newarr[i], newarr);
        console.log(acc);
    }
}
    return acc;
}

function myFind(collection, callback){
    let newarr = Object.values(collection);
    for (let i=0; i<newarr.length; i++){
      if(callback(newarr[i])){
        return newarr[i];
      };
    }
    };

function myFilter(collection, callback){
    let newarr = Object.values(collection);
    let arrobj1=[];
    for (let i=0; i<newarr.length; i++){
        if(callback(newarr[i])){
            arrobj1.push(newarr[i]);
        };
    }
    return arrobj1;
    }

function mySize(collection){
    let newarr = Object.values(collection);
    let j =0;
for (let i=0; i<newarr.length; i++){
    j++;
}
return j;
}

function myFirst(array, n){
    let j = [];
    if (n==null){
        return array[0];
    }
    else{
        for (let i=0; i<n; i++){
            j[i]=array[i];
        }
    }
return j;
}

function myLast(array, n){
    let j = [];
    let x = array.length-1;
    if (n==null){
        return array[x];
    }
    else{
        for (let i=n-1; i>-1; i--){
            j[i]=array[x];
            x--;
        }
    }
return j;
}

function myKeys(obj){
let arr = [];
for (const [key] of Object.entries(obj)) {
    arr.push(key);
  }
  return arr;
}

function myValues(obj){
    let arr = [];
    for (const [key, value] of Object.entries(obj)) {
        arr.push(value);
      }
      return arr;
    }
