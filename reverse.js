function fromPairs(arr) {
  return arr.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
}

console.log(
  fromPairs([
    ["a", 1],
    ["b", 2],
  ])
);
