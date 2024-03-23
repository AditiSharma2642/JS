const accountId = 144553 //it can't be changed
let accountEmail = "abcd@gmail.com"
var accountPAssword = "1234"
accountCity = "Bhopal"
let accountState;

// accountId = 2 //not allowed
 
accountEmail = "hc@hc.com"
accountPAssword = "2121"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use var beacuse of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPAssword, accountCity, accountState])