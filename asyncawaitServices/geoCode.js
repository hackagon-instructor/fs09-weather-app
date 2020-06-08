const axios = require("axios");
// body (request) = res.data (axios)

const callGeoCodeAPI = async (address) => {
  try {
    const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s&address=${address}`)

    if (res.data && res.data.status === "ZERO_RESULTS")
      return Promise.reject({
        code: "NOTFOUND",
        message: "Address not found"
      })

    // resolve
    return {
      lat: res.data.results[0].geometry.location.lat,
      lng: res.data.results[0].geometry.location.lng
    }
  } catch (error) {
    throw {
      code: error.code,
      message: error.message
    }
  }
}

module.exports = {
  callGeoCodeAPI
}