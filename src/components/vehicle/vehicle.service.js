import * as APIService from '../../actions/common/api.service';

function getVehicleDetails() {
    return APIService.httpGetRequest(process.env.REACT_APP_VMS_VEHICLES_API_URL);
}

function getVehicleData(id) {
    return APIService.httpGetRequest(process.env.REACT_APP_VMS_VEHICLES_API_URL + '/' + id);
}

function addVehicleDetails(data) {
    return APIService.httpPostRequest(process.env.REACT_APP_VMS_VEHICLES_API_URL, data);
}

function editVehicleDetails(id, data) {
    return APIService.httpPutRequest(process.env.REACT_APP_VMS_VEHICLES_API_URL, id, data);
}

function deleteVehicleDetails(id) {
    return APIService.httpDeleteRequest(process.env.REACT_APP_VMS_VEHICLES_API_URL, id);
}

export { getVehicleDetails, getVehicleData, addVehicleDetails, editVehicleDetails, deleteVehicleDetails };