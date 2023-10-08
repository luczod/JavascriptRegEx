const { lookahead } = require("./base");
// lookahead
// * (optional) 0 or n {0,}
// + (required) 1 or n {1,}
// ? (optional) 0 or 1 {0,1}
// ^ start with, if has white space or anything, not found
// $ finish with
// [^] negative
// m - multiline, seach by line one by one
// \s+ shortcut tab,white space,breaak line
// \S+ negative shortcut tab,white space,breaak line
// .* dot all, except a line break
// groups $1 $2 $3  retrovisors \1 , like variables in regex

// console.log(lookahead);

/* ?= Positive lookhead(has), get all except match word
console.log(lookahead.match(/.+(?=[^in]active)/gim));
console.log(lookahead.match(/.+(?=inactive)/gim));
console.log(lookahead.match(/.+(?=\s+inactive)/gim)); */

/* ?! negative lookhead(has not), get all
console.log(lookahead.match(/^(?!.+[^in]active).+$/gim)); */

/* ?<= positive lookbehind (start with regex)
console.log(lookahead.match(/(?<=ONLINE\s+)\S+.gim)); */

/* ?! negative lookbehind ( NO start with regex)
console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim)); */

const cpf = `
012.250.796-10
000.000.000-01
111.111.111-11
999.999.999-99
555.555.555-55
147.285.963-10
aaa.bbb.ccc-dd
`;

// No get number sequencial in 11
console.log(
  cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm)
);
