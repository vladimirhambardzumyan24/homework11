function groupBy(arr, funct) {
  let obj = {};
  let newArr = arr.map((item) => funct(item));
  for (let i = 0; i < newArr.length; i++) {
    if (!(newArr[i] in obj)) {
      obj[newArr[i]] = [arr[i]];
    } else obj[newArr[i]].push(arr[i]);
  }
  return obj;
}

console.log(groupBy(["one", "two", "three"], (i) => i.length));
