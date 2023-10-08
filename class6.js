const { cpfs, ips } = require("./base");
// * (optional) 0 or n {0,}
// + (required) 1 or n {1,} sequencial
// ? (optional) 0 or 1 {0,1}
// \ scape character
// {n,m} min and max {n} exactly n, not need +
// . any character except a line break
// [abc] set sequencial
// [^abc123] find all except abc123, [^] negative
// [0-9] must be in order
// \w+ shortcut [a-zA-Z0-9]
// \W+ shortcut [^a-zA-Z0-9]
// \d+ shortcut [0-9]
// \D+ shortcut [^0-9]
// \s+ shortcut tab,white space,breaak line
// \S+ negative shortcut tab,white space,breaak line
// [\u00A0-\u00BA] [min-maxSomething]
// ^(regex) start in regex

console.log(cpfs.match(/[\d\.\-]{14}/g));
const regexIp =
  /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d))/g;
console.log(ips.match(regexIp));
