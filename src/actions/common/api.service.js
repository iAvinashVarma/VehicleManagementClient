import axios from 'axios';

const instance = process.env.REACT_APP_ENVIRONMENT === 'dev' ? axios.create({
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

function httpPutRequest(url, data) {
    return instance({
        method: 'put',
        url,
        data
    });
}

function httpDeleteRequest(url, data) {
    return instance({
        method: 'delete',
        url,
        data
    });
}

export {
    httpGetRequest,
    httpPostRequest,
    httpPutRequest,
    httpDeleteRequest
}