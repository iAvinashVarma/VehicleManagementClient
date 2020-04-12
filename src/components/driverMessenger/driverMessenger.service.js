import * as APIService from '../../actions/common/api.service';

function getDriverMessengerDetails() {
    return APIService.httpGetRequest(process.env.REACT_APP_VMS_DRIVERMESSENGERS_API_URL);
}

function getDriverMessengerData(id) {
    return APIService.httpGetRequest(process.env.REACT_APP_VMS_DRIVERMESSENGERS_API_URL + '/' + id);
}

function addDriverMessengerDetails(data) {
    return APIService.httpPostRequest(process.env.REACT_APP_VMS_DRIVERMESSENGERS_API_URL, data);
}

function editDriverMessengerDetails(id, data) {
    return APIService.httpPutRequest(process.env.REACT_APP_VMS_DRIVERMESSENGERS_API_URL, id, data);
}

function deleteDriverMessengerDetails(id) {
    return APIService.httpDeleteRequest(process.env.REACT_APP_VMS_DRIVERMESSENGERS_API_URL, id);
}

export { getDriverMessengerDetails, getDriverMessengerData, addDriverMessengerDetails, editDriverMessengerDetails, deleteDriverMessengerDetails };