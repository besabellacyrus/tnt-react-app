const axios = require('axios');
// const API_URL = `http://toyntoys-api.test/api/`
const API_URL = `http://159.65.139.212/api/`

module.exports = {
  AppPost: function (path, payload) {
    return axios.post(API_URL + path, payload);
  },
  AppGet: function (path) {
    return axios.get(API_URL + path);
  }
}