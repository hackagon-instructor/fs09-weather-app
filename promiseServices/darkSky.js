const axios = require("axios"); // ES5

/**
 * @todo   call darksky API
 * @param {*} lat latitude 
 * @param {*} lng longitude
 * @param {*} callback (err, res)
 */
const callDarkSkyAPI = (lat, lng) => {
  return axios.get(`https://api.darksky.net/forecast/b8164e69c9f7fbc654f20d2d6381d1fc/${lat},${lng}`)
    .then(res => {
      // handle bad request: cac ban tu lam (address not found, address ko dung format)

      // success
      return Promise.resolve({
        summary: res.data.currently.summary,
        temperature: res.data.currently.temperature
      })
    })
    .catch(err => {
      throw err;
    })
}

module.exports.callDarkSkyAPI = callDarkSkyAPI;