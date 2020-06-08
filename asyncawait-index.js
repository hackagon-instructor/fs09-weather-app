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

  .alias("help", "h")
  .argv

const address = argv.address;

callGeoCodeAPI(address);