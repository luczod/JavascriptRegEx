// Find all words, include latin words
// \w shortcut [a-zA-Z0-9]
const palavrasRegEx = /([\wÀ-ú]+)/g;

// Not numbers
// \D shortcut [^0-9]
const notNumbersRegEx = /\D/g;

// Valid IP
const ipRegExp =
  /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// Valid CPF
const cpfRegExp = /(?:\d{3}\.){2}\d{3}-\d{2}/g;

// Valid phone
const validaTelefone = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/g;

// Strong Password
// * (optional) 0 or n {0,}
// . find all, except a line break
const strongPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\]\)]).{8,}$/g;

// valid E-mail
// * (optional) 0 or n {0,}
// + (required) 1 or n {1,} sequencial
// ? (optional) 0 or 1 {0,1}
// [^\s]+@[^\s]+\.[^\s]+(\w+)* (Hiper Permissive)
// [^\s\.]+\.?[^\s\.]+@[^\s]+\.[^\s]+\w+
const isvalidEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
