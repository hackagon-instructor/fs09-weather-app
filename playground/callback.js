// tượng trưng cho 1 quá trinhf gọi dữ liệu BĐB nào đó
// VD: gọi api, đọc file
let x;
const getData = (cb) => {
  setTimeout(() => {
    x = 10;
    console.log("Got Data")
    cb();
  }, 2000);
}

const printData = () => {
  console.log("x = ", x)
  console.log("Print data")
}

// getData()
// printData()

// getData(printData()) => Ko dung
// getData(printData)
getData(() => {
  printData()
})