// // MAP...
// let arr=[2,4,5,6,7,8];
// // error= undefined due to curly bracket...
// // const newArr=arr.map((x)=>{x*2});
// // now it will double...
// const newArr=arr.map((x)=>x*2);
// console.log(newArr);

// Prototypes in JS...
let arr=[2,4,5,6,7,8];
let arr2=[5,5,5,6,7,8];

function doubleData(x){
    return x*x;
}
Array.prototype.mapReplica=function(logic){
    let output=[];
    for(let i=0;i<this.length;i++){
        output[i]=doubleData(this[i]);
    }
    return output;
}
const myproto=arr.mapReplica(doubleData);
console.log(myproto);
// FILTER..
const words=["aastha","spray","cachhrufjru","hellobyebye"];

const result=words.filter((word)=>word.length>6);
console.log(result);

// 1+2+3+4
const initialvlaue=0;
const sumwithinitial=arr.reduce(
    const sumWithInitial=arr.reduce(accumulwtor,current)=>accumulwtor+current,initialvlaue,
);    