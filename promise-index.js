const yargs = require("yargs");
const axios = require("axios");

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

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s&address=${address}`)
  .then(res => {
    // body (request) = res.data (axios)
    const lat = res.data.results[0].geometry.location.lat
    const lng = res.data.results[0].geometry.location.lng

    console.log(lat, lng)
  })
  .catch(err => console.log(err))