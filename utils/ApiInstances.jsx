import axios from 'axios';
import Storage from './Storage';
export const baseUrl = 'http://192.168.1.46:5000/api';

export const axiosPostData = async (url, formData) => {
  return await axios
    .post(`${baseUrl}/${url}`, formData, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

export const PostData = async (url, Data) => {
  let token = await Storage.getToken();
  return axios
    .post(`${baseUrl}/${url}`, Data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: !!token ? 'Bearer ' + token : '',
      },
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(JSON.stringify(error));
      return error
    });
};


export const axiosPutData = async (url, formData) => {
  let userProfile = await Storage.getToken();
  return axios.put(`${baseUrl}${url}`, formData, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Accept: 'application/json',
      Authorization: `Bearer ${userProfile}`,
    },
  })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
};

export const axiosGetData = async (url, formData) => {
  let userProfile = await Storage.getToken();
  return axios
    .get(`${baseUrl}/${url}`, {
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        Authorization: `Bearer ${userProfile}`,
      },
    })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};
export const GetData = async url => {
  let response = 'no';
  let userProfile = await Storage.getToken();
  await axios
    .get(`${baseUrl}${url}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        Authorization: `Bearer ${userProfile}`,
      },
    })
    .then(res => {
      response = res;
    })
    .catch(err => {
      response = err
    });

  return response;
};
