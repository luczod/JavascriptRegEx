const { texto } = require("./base");
// g - global all occurrences
// i - insensitive
// () group
// | or
// (...)(...)(...) $1 $2 $3

const RegExp1 = /john|mary/gi;
// const found = RegExp1.match(texto);
const found = texto.match(RegExp1);
console.log(texto);
console.log(found);
// console.log(texto.replace(/(john|mary)/gi, "<b>$1</b>"));
console.log(
  texto.replace(/(john|mary)/gi, function (e) {
    return e.toUpperCase();
  })
);
