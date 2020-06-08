const request = require("request"); // ES5

/**
 * @todo   call darksky API
 * @param {*} lat latitude 
 * @param {*} lng longitude
 * @param {*} callback (err, res)
 */
const callDarkSkyAPI = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/b8164e69c9f7fbc654f20d2d6381d1fc/${lat},${lng}`,
    json: true
  }, (err, res, body) => {
    // error => Cac ban tu lam

    // result
    callback(null, {
      summary: body.currently.summary,
      temperature: body.currently.temperature
    })
  })
}

module.exports.callDarkSkyAPI = callDarkSkyAPI;