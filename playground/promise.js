const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("sucessfully")
    reject("Failed")
  }, 2000);
})

myPromise
  .then(res => {
    console.log("res", res)
  })
  .catch(err => {
    console.log("err", err)
  })
