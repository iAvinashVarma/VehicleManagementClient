import axios from 'axios';

const instance = process.env.REACT_APP_ENVIRONMENT === 'dev' ? axios.create({
    baseURL: process.env.REACT_APP_VMS_HOST,
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
    responseType: 'json'
}) : axios.create({
    baseURL: process.env.REACT_APP_VMS_HOST,
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
    responseType: 'json'
});

function httpGetRequest(url) {
    return instance({
        method: 'get',
        url
    });
}

function httpPostRequest(url, data) {
    return instance({
        method: 'post',
        url,
        data
    });
}

function httpPutRequest(url, id, data) {
    return instance({
        method: 'put',
        url: url + '/' + id,
        data
    });
}

function httpDeleteRequest(url, id) {
    return instance({
        method: 'delete',
        url: url + '/' + id
    });
}

export {
    httpGetRequest,
    httpPostRequest,
    httpPutRequest,
    httpDeleteRequest
}