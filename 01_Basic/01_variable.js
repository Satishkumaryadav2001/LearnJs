const accountId=875412
let accountEmail="Satish@google.com"
var accountPassword="12345"
accountCity="jaipur"

let accountState;

// accountId=2 not allowed

accountEmail="satish@microshoft@gmail.com"
accountCity="Noida";
console.log(accountId);
/*
Perfer not to use var
because of issue in block and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);