function sumAll(min, max) {
  let finalSum = 0;
  for (let i = min; i < max + 1; i++) {
      finalSum += i
  }
  return finalSum
}