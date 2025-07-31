import { capitalize, reverseString } from "./stringUtils";
console.log(capitalize('hi'));
console.log(reverseString('gutten'));
///////////////////////////////////////////
import { Finance } from "./finance";
const myLoan = new Finance.LoanCalculator(1000, 6, 12)
console.log(`I need to pay every month ${myLoan.calculatePercentAndMonthPat()} $`);

console.log(Finance.TaxCalculator.getTaxAmount(35000, 12));
////////////////////////////////////////////////////////////

import { UserManagement } from "./userManagement";

const myAdmin = new UserManagement.Admin.AdminUser("Dmitrii", "dima.osa1945@gmail.com", true)
myAdmin.changeRole();
//////////////////////////////////////////////////////////////////
import { generateFibonacci, generatePrimeNumbers } from "./sequenceUtils";
console.log("Fibonacci up to 25", generateFibonacci(25));
console.log("Prime numbers up to 19", generatePrimeNumbers(19));