const { ips } = require("./base");
// * (optional) 0 or n {0,}
// + (required) 1 or n {1,} sequencial
// ? (optional) 0 or 1 {0,1}
// [abc] set sequencial
// \d+ shortcut [0-9]
// \D+ shortcut [^0-9]
// ^(regex) start in regex
// $(regex) end in regex

// 250 - 255 25[0-5]
// 200 - 249 2[0-4][0-9]
// 100 - 199 1\d{2}
// 10 - 99 [1-9]\d
// 0 - 9 \d

// const regexIp = /^(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)/g;
const regexIp =
  /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d))/g;

for (let i = 0; i <= 300; i++) {
  const ip = `${i}.${i}.${i}.${i}`;
  if (!ip.match(regexIp)) continue;
  console.log(ip, ip.match(regexIp));
}
