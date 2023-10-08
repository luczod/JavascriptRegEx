const { html2 } = require("./base");
// retrovisors
// groups $1 $2 $3  retrovisors \1 , like variables in regex
// * (optional) 0 or n {0,}
// + (required) 1 or n {1,}
// ? (optional) 0 or 1 {0,1}
// ^ start with, if has white space or anything, not found
// $ finish with
// [^] negative
// m - multiline, seach by line one by one
// \w+ shortcut [a-zA-Z0-9]
// \W+ shortcut [^a-zA-Z0-9]
// .* dot all, except a line break
// [\s\S]* space e not space
// ?: exclude from retorvisor, according to the groups

// console.log(html2);
// console.log(html2.match(/<(\w+)[\s\S]*?(>[\s\S]*?)<\/\1>/g));
// console.log(html2.replace(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g, "$1"));
console.log(
  html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g, "$1 HAHA $3 HAHA $4")
);

console.log(
  html2.replace(
    /(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g,
    "$1 HAHA $3 HAHA $4"
  )
);
