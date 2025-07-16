const { readFile } = require('fs')
const https = require('https')
// const { pbkdf2Sync} = require('node:crypto');
// console.log("start")

// const key = pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512');
// console.log(key.toString('hex'));

// function abc(){
//     console.log("abc")
// }

// abc();


// const key2 = pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512');
// console.log(key2.toString('hex'));

// console.log("something")

// const key3 = pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512');
// console.log(key3.toString('hex'));

//BY DEFAULT = 4
//MAX SIZE = 1024 
//set uv_thread_pool_size = 10    IN TERMINAL
//process.env.uv_thread_pool_size = 10    IN CODE AT TOP


// console.log("start")
// var a =200
// console.log(a)
// function hello(){
//     console.log("hello")
// }
// hello();
// var b =300;

// setImmediate(()=>{
//     console.log("setImmediate")
// })

// console.log(b);
// console.log("end")

// process.nextTick(()=>{                  // RUNS FIRST
//     console.log("nextTick")
// })
readFile('etc/passwd',(err,data)=>{
    console.log("read file")
})

setTimeout(()=>{
    console.log("timeout 1")
},0)


https.get("https://dummyjson.com/products",(res)=>{
    console.log("api data")
}).on('error',(e)=>{
    console.log("error")
})

setImmediate(()=>{
    console.log("setImmediate")
})

setTimeout(()=>{
    console.log("timeout 2")
},0)

process.nextTick(()=>{             
    console.log("nextTick")
})

console.log("hello")


process.nextTick(()=>{                
    console.log("nextTick 2")
}) 