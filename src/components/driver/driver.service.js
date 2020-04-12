import * as APIService from '../../actions/common/api.service';

function getDriverDetails() {
    return APIService.httpGetRequest(process.env.REACT_APP_VMS_DRIVERS_API_URL);
}

function addDriverDetails(data) {
    return APIService.httpPostRequest(process.env.REACT_APP_VMS_DRIVERS_API_URL, data);
}

function editDriverDetails() {
    return APIService.httpGetRequest(process.env.REACT_APP_VMS_DRIVERS_API_URL);
}

export { getDriverDetails, addDriverDetails, editDriverDetails };