console.log("Welcome to Today Practice Array and JSON");

console.log("Hello World");

let obj = {
    name: "Saro",
    Age: 28,
    Address: {
        street: "Colleg Road",
        city: "Ponneri"
    },
    isworking: true,
    };

// console.log(obj);
// console.log(obj["name"]);
// let keytobeAccessed = "Age";
// console.log(obj.keytobeAccessed); //Not to Accessed type
// console.log(obj[keytobeAccessed]); // Accessed type

console.log(Object.keys(obj));

// for (let val of Object.keys(obj)) {
//     console.log(val , "==>" , obj[val]);
// }


for (let key in obj) {
    //console.log(typeof(obj[key]));
    // if (typeof(obj[key]) === 'object')
    //     {
    //         console.log("```");
    //         for (let key2 in obj[key]) {
    //             console.log(key2, "=>", obj[key][key2]);
    //         }
    //         console.log("```");
    //         continue;
    //     }
    console.log(key, "===>", obj[key]);
}

console.log(typeof(obj));