function fact(num) {
  let factValue = 1;

  for (let i = 1; i <= num; i++) {
    factValue *= i;
  }

  return factValue;
}
exports.fact = fact;
