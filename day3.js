// async 

console.log("Start Scirpt");

function walkInRes(cb){
    console.log("I am walking inside the restraunt..");
    setTimeout(cb,3000);
}

function payBill(cb){
    console.log("I am paying the bill..");
    setTimeout(cb,2000);
}

function orderFood(cb){
    console.log("I am ordering food..");
    setTimeout(cb,5000);
}

function havingLunch(cb){
    console.log("I am having my lunch..");
    setTimeout(cb,6000);
}

walkInRes(function(){
    console.log("hello world");
});


// wrong:- walkInRes(orderFood(havingLunch(payBill())));

// right:-
// walkInRes(()=>{
//     orderFood(()=>{ 
//     }
// )
//     havingLunch(()=>{
        
//     })
//     }
// })