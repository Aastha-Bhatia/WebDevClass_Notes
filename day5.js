// PROMISES...

console.log("Promises:-");

// const myPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("I will get a placement..");
//     },3000);
// });

// myPromise 
// .then((res)=>console.log(res))
// .then(()=>setTimeout(()=>{
//         console.log("I will party");
// },5000))
// .then(()=>setTimeout(()=>{
//         console.log("I will work");
// },3000))
// .then(()=>setTimeout(()=>{
//         console.log("I will get laid off (nooooooo)");
// }, 1000))
// .catch((err)=>console.log(err))

// works not in order....


// we are making new promise each time this time, so it works...

// function pranshPlacement(placementStep,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Pransh will get the placement : "+placementStep);
//             console.log("Pransh will get the placement : "+placementStep);
//         },delay);
//     });
// }
// pranshPlacement("Pransh Got Placement",5000)
// .then(()=>pranshPlacement("Party TAIME",3000))
// .then(()=>pranshPlacement("PRansh woorking",2000))
// .then(()=>pranshPlacement("layoff",1000))
// .catch((err)=>console.log(err));

// PROMISE API'S
// 4 types of Promise API's

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I will get a placement..");
        console.log("I will get a placement..");
    },3000);
});

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I should get some snacks..");
        console.log("I should get some snacks..");
    },3000);
});

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I dk what to write..");
        console.log("I dk what to write..");
    },3000);
});

const p4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("product b");
        console.log("product b");
    },3000);
});

// Promise.all([p1,p2,p3,p4]);
// Promise.allSettled([p1,p2,p3,p4]);
// Promise.race([p1,p2,p3,p4]);
// Promise.any([p1,p2,p3,p4]);
