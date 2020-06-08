const request = require("request"); // ES5

/**
 * @todo  call google geocode api
 * @param {*} address 
 * @param {*} callback(err, res) callback has 2 parameters: err (error) and res (result|response) 
 */
const callGeoCodeAPI = (address, callback) => {
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s&address=${address}`,
    json: true
  }, (err, res, body) => {
    // error
    if (err && err.code === "ENOTFOUND")
      return callback("Cannot connect to google API");

    if (err && err.code === "ERR_UNESCAPED_CHARACTERS")
      return callback("Wrong character input")

    if (body && body.status === "ZERO_RESULTS")
      return callback("Address not found")

    if (body && body.status === "INVALID_REQUEST")
      return callback("Invalid request")

    // result
    if (body && body.status === "OK") {
      callback(null, {
        formatted_address: body.results[0].formatted_address,
        lat: body.results[0].geometry.location.lat,
        lng: body.results[0].geometry.location.lng
      })
    }
  })
}

module.exports = {
  // callGeoCodeAPI: callGeoCodeAPI
  callGeoCodeAPI // destructuring ES6
}

// module.exports.callGeoCodeAPI = callGeoCodeAPI;