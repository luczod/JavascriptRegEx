const { alfabeto } = require("./base");
// * (optional) 0 or n {0,}
// + (required) 1 or n {1,}
// ? (optional) 0 or 1 {0,1}
// \ scape character
// {n,m} min and max
// . any character except a line break
// [abc] set
// [^abc123] find all except abc123, [^] negative
// [0-9] must be in order
// \w+ shortcut [a-zA-Z0-9]
// \W+ shortcut [^a-zA-Z0-9]
// \d+ shortcut [0-9]
// \D+ shortcut [^0-9]
// \s+ shortcut tab,white space,breaak line
// \S+ negative shortcut tab,white space,breaak line
// [\u00A0-\u00BA] [min-maxSomething]

console.log(alfabeto);
/* 
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)); // Unicode chars
console.log(alfabeto.match(/[abc123]+/g));
console.log(alfabeto.match(/[^abc123]/g));
console.log(alfabeto.match(/[0-9]/g));  
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/[a-k]+/g)); 
console.log(alfabeto.match(/[a-zA-Z0-9]+/g)); 
console.log(alfabeto.match(/\w+/g));
console.log(alfabeto.match(/\W+/g));
console.log(alfabeto.match(/\d+/g));  shortcut [0-9]
console.log(alfabeto.match(/\D+/g));  shortcut [^0-9]
*/

console.log(alfabeto.match(/\s+/g));
console.log(alfabeto.match(/\S/g));
