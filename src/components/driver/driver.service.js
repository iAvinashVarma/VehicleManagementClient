import * as APIService from '../../actions/common/api.service';

function getDriverDetails() {
    return APIService.httpGetRequest(process.env.REACT_APP_VMS_DRIVERS_API_URL);
}

function getDriverData(id) {
    return APIService.httpGetRequest(process.env.REACT_APP_VMS_DRIVERS_API_URL + '/' + id);
}

function addDriverDetails(data) {
    return APIService.httpPostRequest(process.env.REACT_APP_VMS_DRIVERS_API_URL, data);
}

function editDriverDetails(id, data) {
    return APIService.httpPutRequest(process.env.REACT_APP_VMS_DRIVERS_API_URL, id, data);
}

function deleteDriverDetails(id) {
    return APIService.httpDeleteRequest(process.env.REACT_APP_VMS_DRIVERS_API_URL, id);
}

export { getDriverDetails, getDriverData, addDriverDetails, editDriverDetails, deleteDriverDetails };