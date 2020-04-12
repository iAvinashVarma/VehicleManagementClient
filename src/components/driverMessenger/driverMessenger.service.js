import * as APIService from '../../actions/common/api.service';

function getDriverMessengerDetails() {
    return APIService.httpGetRequest(process.env.REACT_APP_VMS_DRIVERMESSENGERS_API_URL);
}

function addDriverMessengerDetails(data) {
    return APIService.httpPostRequest(process.env.REACT_APP_VMS_DRIVERMESSENGERS_API_URL, data);
}

function editDriverMessengerDetails() {
    return APIService.httpGetRequest(process.env.REACT_APP_VMS_DRIVERMESSENGERS_API_URL);
}

export { getDriverMessengerDetails, addDriverMessengerDetails, editDriverMessengerDetails };