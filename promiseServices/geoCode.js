const axios = require("axios");
// body (request) = res.data (axios)

callGeoCodeAPI = (address) => {
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s&address=${address}`)
    .then(res => {
      if (res.data && res.data.status === "ZERO_RESULTS")
        return Promise.reject({
          code: "NOTFOUND",
          message: "Address not found"
        })

      // resolve
      console.log(res.data.results[0].geometry.location.lat,
        res.data.results[0].geometry.location.lng)
      return {
        lat: res.data.results[0].geometry.location.lat,
        lng: res.data.results[0].geometry.location.lng
      }
    })
    .catch(err => {
      throw {
        code: err.code,
        message: err.message
      }
    })
}

module.exports = {
  callGeoCodeAPI
}