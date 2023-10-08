const { html } = require("./base");
// quantifiers
// * (optional) 0 or n {0,}
// + (required) 1 or n {1,}
// ? (optional) 0 or 1 {0,1}
// \ scape character
// {n,m} min and max
// . any character except a line break

console.log(html.match(/<.+>.+<\/.+>/g)); // greedy
console.log(html.match(/<.+?>.+?<\/.+?>/g)); // non-greedy
console.log(html.match(/<div>.+?<\/div>/g));
