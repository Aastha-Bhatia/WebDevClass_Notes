// // scope
// // var a=10;

// // let- block scope
// // var- global, functional 

// // eg

// {
//     let a=10;
//     var b=20;
//     console.log(a,b);
// }
// console.log(a,b);

// -------------------------------------------------------------------------------
// Higher Order Function- HOF
// function calculate(param1){
//     console.log("Calculate the BL");
//     param1();
// }
// var sumOfTwo=() =>{
//     console.log("Sum of two is working...");
// }
// calculate(sumOfTwo);



function Student(param1,param2){
    param1();
    param2();
}
var name=()=>{
    console.log("Name of the student is Aastha...");
}
var fees=()=>{
    let fee=3000;
    console.log("The fees is",fee);
    emi(fee);
}
var emi=(fee)=>{
    var totalemi=fee/10;
    console.log(totalemi);
    welcome();
}
var welcome=()=>{
    console.log("Hello World....")
}
Student(name,fees);   


