const { texto } = require("./base");
// g - global all occurrences
// i - insensitive
// () group
// | or

const RegExp1 = /(mary|john|luke)(, today his wife)/i;
const found = RegExp1.exec(texto);

if (found) {
  console.log(found[0]);
  console.log(found[1]);
  console.log(found.index);
} else {
  console.log(false);
}
