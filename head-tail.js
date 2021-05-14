function getHead(arr) {
  let [head] = arr;
  return [head];
}

function getTail(arr) {
    let [,...tail]=arr
    return tail
}

console.log(getHead([1, 2, 3]));

console.log(getTail([1, 2, 3]));
