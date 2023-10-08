const { cpfs2 } = require("./base");
// start and end
// ^ start with, if has white space or anything, not found
// $ end with
// [^] negative
// m - multiline, seach by line one by one

const cpf = " 254.224.877-45";

const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
console.log(cpfs2);
console.log(cpfs2.match(cpfRegExp));
