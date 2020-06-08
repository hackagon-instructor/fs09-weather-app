// 3rd packages
const request = require("request"); // ES5
const yargs = require("yargs");

// my packages
// const darksky = require("./services/darksky")
// const callDarkSkyAPI = darksky.callDarkSkyAPI;

// const callDarkSkyAPI = require("./services/darksky").callDarkSkyAPI;
const { callDarkSkyAPI } = require("./services/darksky");
const { callGeoCodeAPI } = require("./services/geoCode");

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

callGeoCodeAPI(address, (err, res) => {
  if (err) throw new Error(err)
  // throw err

  // const lat = res.lat
  // const lng = res.lng
  const { lat, lng, formatted_address } = res;
  console.log("formatted_address: ", formatted_address);
  callDarkSkyAPI(lat, lng, (err, res) => {
    if (err) throw new Error(err)

    const { summary, temperature } = res;
    console.log("summary: ", summary)
    console.log("temperature: ", temperature)
  })
})