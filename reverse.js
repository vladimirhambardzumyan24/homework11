function fromPairs(arr) {
  let obj = arr.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  return obj;
}

console.log(
  fromPairs([
    ["a", 1],
    ["b", 2],
  ])
);
