const request = require("request"); // ES5
const yargs = require("yargs");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Enter your address",
      string: true
    }
  })
  .help()
  .alias("help", "h")
  .argv

const address = argv.address;

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s&address=${address}`,
  json: true
}, (err, res, body) => {
  if (err && err.code === "ENOTFOUND")
    return console.log("Cannot connect to google API");

  if (err && err.code === "ERR_UNESCAPED_CHARACTERS")
    return console.log("Wrong character input")

  if (body && body.status === "ZERO_RESULTS")
    return console.log("Address not found")

  if (body && body.status === "INVALID_REQUEST")
    return console.log("Invalid request")

  if (body && body.status === "OK") {
    console.log("address: ", body.results[0].formatted_address)
    const lat = body.results[0].geometry.location.lat
    const lng = body.results[0].geometry.location.lng

    request({
      url: `https://api.darksky.net/forecast/b8164e69c9f7fbc654f20d2d6381d1fc/${lat},${lng}`,
      json: true
    }, (err, res, body) => {
      console.log(body.currently.summary)
      console.log(body.currently.temperature)
    })
  }
})