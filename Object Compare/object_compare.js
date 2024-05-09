console.log("-----------------------------------------------");
console.log("Object_Comparsion Page Reached");
console.log("-----------------------------------------------");
let obj1 = {
    name : "Saro",
    age : 28,
    city : "Ponneri",
    pincode : 601201,
};

let obj2 = {
    city : "Ponneri",
    name : "Saro",
    pincode : 601201,
    age : 28,
};

if (JSON.stringify(obj1, Object.keys(obj1).sort()) === JSON.stringify(obj2, Object.keys(obj2).sort())) {
    console.log("Both Object are Equal");
} else {
    console.log("Both Object are Not Equal");
}