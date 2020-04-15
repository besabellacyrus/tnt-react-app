const axios = require('axios');

// const API_URL = `http://toyntoys-api.test/api/`
const API_URL = process.env.NODE_ENV === 'production' ? 'http://159.65.139.212' : 'http://toyntoys-api.test';

const apiUrl = API_URL;

const AppPost = (path, payload) => {
  return axios.post(API_URL + path, payload);
}

const AppGet = (path) => {
  return axios.get(API_URL + path);
}

const AppDelete = (path, payload) => {
  return axios.delete(API_URL + path, { params: { 'id': payload } });
}

const AppPatch = (path, payload) => {
  return axios.patch(API_URL + path, payload);
}

exports.AppDelete = AppDelete;
exports.AppPost = AppPost;
exports.AppPatch = AppPatch;
exports.AppGet = AppGet;
exports.apiUrl = apiUrl;