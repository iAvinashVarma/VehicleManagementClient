import * as APIService from '../../actions/common/api.service';

function getVehicleDetails() {
    return APIService.httpGetRequest(process.env.REACT_APP_VMS_VEHICLES_API_URL);
}

function addVehicleDetails(data) {
    return APIService.httpPostRequest(process.env.REACT_APP_VMS_VEHICLES_API_URL, data);
}

function editVehicleDetails() {
    return APIService.httpGetRequest(process.env.REACT_APP_VMS_VEHICLES_API_URL);
}

export { getVehicleDetails, addVehicleDetails, editVehicleDetails };