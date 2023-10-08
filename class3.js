const { texto, arquivos } = require("./base");
// quantifiers
// * (optional) 0 or n {0,}
// + (required) 1 or n {1,}
// ? (optional) 0 or 1 {0,1}
// \ scape character
// {n,m} min and max

/* const RegExp1 = /jo+hn+/gi;
const found = texto.match(RegExp1); */
const RegExp2 = /\.jpe*g/gi;
const RegExp3 = /\.jpe?g/gi;
const RegExp4 = /\.jpe{0,1}g/gi;
const RegExp5 = /\.(jp|JP)(e|E)?(g|G)/g;

for (const arquivo of arquivos) {
  const valid = arquivo.match(RegExp5);
  if (!valid) continue;
  console.log(arquivo, valid);
}
