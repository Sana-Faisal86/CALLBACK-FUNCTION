// PRACTICE => 1  'SETTIMEOUT'

let promise = new Promise((resolved, reject) => {
  console.log("Promise Pending");
  setTimeout(() => {
    let data = ["sana", "faisal", "hamza"];
    return resolved(data);
    // console.log("promise rejected");
    // let data2 = ""
    // return reject(data2)
  }),
    4000;
});
promise.then((res) => console.log(res));
// promise.catch((err)=>console.log(err));



// Return Function:
// The return statement stops the execution of a function and returns a value.

function fullName(fName: string, lName: string) {
    let personName = fName + " - " + lName;
    return personName;
  }
  let answer = fullName("Sana", "Faisal");
  
  console.log("\n\tFullName ==>", answer);
  
  