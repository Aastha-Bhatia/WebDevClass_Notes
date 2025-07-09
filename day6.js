console.log("ASYNC & AWAIT..");

// function fetchDataProducts(){
//     const data=fetch('https://dummyjson.com/products');
//     console.log(data);
// }
// fetchDataProducts();

async function fetchDataProducts(){
    const data=await fetch('https://dummyjson.com/products');
    const finaldata=await data.json();
    console.log(finaldata);
}
fetchDataProducts();


// DOM- DOCUMENT OBJECT MODEL...
// EVENT CAPTURING AND EVENT BUBBLING
// ...

// call(), apply(), bind() 
function admissionProcess(studentName,studentClass){
    console.log(`Hi ${studentName}, from Class: ${studentClass}`)
}
const student1={
    studentName:"Aastha",
    studentClass:"G5"
}
const student2={
    studentName:"Anshika",
    studentClass:"G5"
}
// admissionProcess.call("Piyush","G5");
admissionProcess.apply(student1,["Piyush","G5"]);
// admissionProcess.call(student1);
admissionProcess.call(student2);

// in bind we do not pass array as an argument...
const b1=admissionProcess.bind(student1,["Python","Zeta Cluster"]);
b1();