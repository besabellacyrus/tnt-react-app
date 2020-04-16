const axios = require('axios');

// const API_URL = `http://toyntoys-api.test/api/`
const API_URL = process.env.NODE_ENV === 'production' ? 'http://159.65.139.212' : 'http://toyntoys-api.test';

export const apiUrl = API_URL;

export const AppPost = (path, payload) => {
  return axios.post(API_URL + path, payload);
}

export const AppGet = (path) => {
  return axios.get(API_URL + path);
}

export const AppDelete = (path, payload) => {
  return axios.delete(API_URL + path, { params: { 'id': payload } });
}

export const AppPatch = (path, payload) => {
  return axios.patch(API_URL + path, payload);
}

export const AppPostFile = (path, formData) => {

  return axios.post(API_URL + path,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
}

// exports.AppPostFile = AppPostFile;
// exports.AppDelete = AppDelete;
// exports.AppPost = AppPost;
// exports.AppPatch = AppPatch;
// exports.AppGet = AppGet;
// exports.apiUrl = apiUrl;