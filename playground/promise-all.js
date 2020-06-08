const asyncAdd = (a, b, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b)
      } else {
        reject("Invalid input(s)")
      }
    }, time);
  })
}


// asyncAdd(1, 2, 2000)
//   .then(res => {
//     console.log(res);
//     return asyncAdd(3, 4, 3000)
//   })
//   .then(res => {
//     console.log(res);
//   })

Promise.all([
  asyncAdd(1, 2, 2000),
  asyncAdd(3, 4, 3000)
])
  .then(([sum1, sum2]) => {
    console.log(sum1, sum2)
  })