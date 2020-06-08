// 1 + 2 + 3 + 4 ...
const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b)
      } else {
        reject("Invalid input(s)")
      }
    }, 1000);
  })
}
// promise hell
// asyncAdd(1, "2")
//   .then(res => {
//     console.log("sum 1: ", res)

//     asyncAdd(res, 3)
//       .then(res => {
//         console.log("sum 2: ", res)

//         asyncAdd(res, 4)
//           .then(res => {
//             console.log("sum 3: ", res)
//           })
//           .catch(err => console.log(err))
//       })
//       .catch(err => console.log(err))
//   })
//   .catch(err => console.log(err))

// promise chaining
asyncAdd(1, 2)
  .then(res => {
    console.log("sum 1: ", res)

    return asyncAdd(res, "3")
  })
  .then(res => {
    console.log("sum 2: ", res)

    return asyncAdd(res, 4)
  })
  .then(res => {
    console.log("sum 3: ", res)
  })
  .catch(err => console.log(err))
