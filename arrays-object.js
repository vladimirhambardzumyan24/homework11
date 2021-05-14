function zipObject(arr1, arr2) {
  let newObj = arr1.map((item, index) => {
    if (arr2[index] === undefined) {
      arr2[index] = null;
    }
    return [item, (item = arr2[index])];
  });
  return newObj.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
}

console.log(zipObject(["a", "b", "c"], [1, 2]));
// => { 'a': 1, 'b': 2, c: null }
