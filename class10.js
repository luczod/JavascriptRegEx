// Find all words, include latin words
// \w shortcut [a-zA-Z0-9]
const palavrasRegEx = /([\wÀ-ú]+)/g;

// No numbers
// \D shortcut [^0-9]
const naoNumerosRegEx = /\D/g;

// Valid IP
const ipRegExp =
  /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// Valid CPF
const cpfRegExp = /(?:\d{3}\.){2}\d{3}-\d{2}/g;
