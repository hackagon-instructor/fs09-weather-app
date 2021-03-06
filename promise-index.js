const yargs = require("yargs");
const axios = require("axios");
const { callGeoCodeAPI } = require("./promiseServices/geoCode");
const { callDarkSkyAPI } = require("./promiseServices/darkSky");

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

callGeoCodeAPI(address)
  .then(res => {
    const { lat, lng } = res;
    return callDarkSkyAPI(lat, lng)
  })
  .then(res => {
    const { summary, temperature } = res;
    console.log("temperature", temperature)
    console.log("summary", summary)
  })
  .catch(console.log)