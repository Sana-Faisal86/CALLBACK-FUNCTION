import chalk from "chalk";
// PRACTICE WORK FOR CALLBACK FUNCTION:
// KISI BHI FUNCTION K ARGUMENT MAI FUNCTION PASS KARNE KO CALLBACK FUNCTION KEHTAY HAI.
// // ------------------------------------------------------------------------------------------------------------------
// // // PRACTICE => 1:
// function first(call: any) {
//   call();
// }
// let firstfun = () => {
//   console.log(
//     chalk.black.bgYellowBright(
//       "\n\t\tfirst callback function ==> Assalam u Alaikum "
//     )
//   );
// };
// first(firstfun);
// // ----------------------------------------------------------------------------------------------------------------
// PRACTICE => 2: CALLBACK FUNCTION:
// function second(call: any) {
//   call(" SIR BILAL ", " MISS ATIA ");
// }
// let secfun = (stu1: string, stu2: string) => {
//   console.log(chalk.black.bgBlueBright(`\n\t\tAssalam u Alaikum => ${stu1},${stu2}`));
// };
// second(secfun);
// // --------------------------------------------------------------------------------------------------------
// PRACTICE => 3 :
// ADVANCED CALLBACK FUNCTION:
// function third(call: any, newName: string, perName: string) {
//   call(newName, perName);
// }
// let thirfun = (stu1: string, stu2: string) => {
//   console.log(chalk.black.bgMagenta(`\n\t\tAssalam u Alaikum => ${stu1},${stu2}`));
// };
// third(thirfun, "MISHA", "MEHAK");
// // ----------------------------------------------------------------------------------------------
// // PRACTICE => 4: NESTED CALLBACK Hell FUNCTION :
// function fourth(call: any, call2: any) {
//   call("Mehak", "Jarjina");
//   call2(30, 32);
// }
// let forthfun = (name: string, name2: string) => {
//   console.log(chalk.green.underline("\n\t\t >> What is your name?"));
//   console.log(chalk.blue.underline(`\n\t\t>> My name is ${name}, \n\t\t>> My name is ${name2}`));
// };
// let nestfun = (age: number, age2: number) => {
//   console.log(chalk.green.underline("\n\t\t>> How old are you?"));
//   console.log(chalk.blue.underline(`\n\t\t>> I am ${age} years old . \n\t\t>> I am ${age2} years old.`));
// };
// fourth(forthfun, nestfun);
// // ---------------------------------------------------------------------------------------------
// // PRACTICE => 5 CALLBACK FUNTION IN PERCENTAGE:
// function subject(math: number, eng: number, sci: number) {
//   let marks = math + eng + sci;
//   return marks;
// }
// function percentage(tt: number) {
//   let per = (tt / 300) * 100;
//   console.log(chalk.black.bgCyanBright("\n\t\t >> Percentage ==>", per));
// }
// let total = subject(45, 67, 87);
// percentage(total);
// ---------------------------------------------------------------------------------------------
// // PRACTICE => 1  'SETTIMEOUT','PROMISE' , (.then .catch) practice work:
// let promise = new Promise((resolved, reject) => {
//   console.log(chalk.blue.underline("\n\t\t>>> Promise Pending"));
//   setTimeout(() => {
//     let data = ["Sana", "Faisal", "Hamza"];
//     // let data = ""
//     if (data) {
//       console.log(chalk.yellow.underline("\n\t\t>>> Promise Resolved\n"));
//       return resolved(data);
//     } else {
//       console.log(chalk.red.underline("\n\t\t>>> Promise rejected"));
//       return reject(new Error(chalk.black.bgRedBright("\n\t\t>>> Data fetch failed")));
//     }
//   }, 4000);
// });
// promise
//   .then((res) => console.log(res))
//   .catch((err) => console.log(chalk.green.underline("\n\t\t>>> Aap ka data fetch nhi hoskha")));
// // PRACTICE WORK FOR SETIMEOUT , PROMISE (.then) (.catch) AND table index.
let mypromise = new Promise((resolve, reject) => {
    console.log(chalk.black.bgBlueBright("\n\t>>>> Promise Pending !"));
    setTimeout(() => {
        console.log(chalk.black.bgGreenBright("\n\t>>>> Promise resolved !\n"));
        resolve({
            name: "HAMZA",
            age: 13,
            email: "abc@hotmailcom",
            address: "abcdstreet",
        });
        // console.log(chalk.black.bgRedBright("\n\t>>>> Promise Rejected !"));
        // reject(new Error("Data fetch failed"))
    }, 3000);
});
mypromise
    .then((res) => {
    console.table(res);
})
    .catch((err) => {
    console.log(chalk.black.bgGreenBright("\n\t>>>> Aap ka data fetch nhi hosakta. "));
});
