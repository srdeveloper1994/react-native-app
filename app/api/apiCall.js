import axios from 'axios';

export function makeRequest(url, type = 'get', data = {}, header = {}) {
    let reqHeader = Object.assign(header, {"Accept": "application/json", "Content-Type": "application/json"});
    if (type === 'get') {
        return axios.get(url,{headers: reqHeader})
            .then((response) => {
                console.log("Response - " + url + " TYPE- " + type);
                return Promise.resolve(response.data)
            })
            .catch((err) => {
                console.log("Error - " + url + " TYPE- " + type, err);
                return Promise.reject(err);
            });
    } else if (type === 'post') {
        return axios.post(url, data, {headers: reqHeader})
            .then((response) => {
                console.log("Response - " + url + " TYPE- " + type);
                return Promise.resolve(response)
            })
            .catch((err) => {
                console.log("Error - " + url + " TYPE- " + type, err);
                return Promise.reject(err);
            });
    } else if (type === 'delete') {
        return axios.delete(url, {headers: reqHeader})
            .then((response) => {
                console.log("Response - " + url + " TYPE- " + type);
                return Promise.resolve(response);
            })
            .catch((err) => {
                console.log("Error - " + url + " TYPE- " + type, err);
                return Promise.reject(err);
            });
    } else if (type === 'patch') {
        return axios.patch(url, data, {headers: reqHeader})
            .then((response) => {
                console.log("Response - " + url + " TYPE- " + type);
                return Promise.resolve(response)
            })
            .catch((err) => {
                console.log("Error - " + url + " TYPE- " + type, err);
                return Promise.reject(err);
            });
    }
}