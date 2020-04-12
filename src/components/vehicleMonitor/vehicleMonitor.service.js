import * as APIService from '../../actions/common/api.service';

function getVehicleMonitorDetails() {
    return APIService.httpGetRequest(process.env.REACT_APP_VMS_VEHICLEMONITORS_API_URL);
}

function getVehicleMonitorData(id) {
    return APIService.httpGetRequest(process.env.REACT_APP_VMS_VEHICLEMONITORS_API_URL + '/' + id);
}

function addVehicleMonitorDetails(data) {
    return APIService.httpPostRequest(process.env.REACT_APP_VMS_VEHICLEMONITORS_API_URL, data);
}

function editVehicleMonitorDetails(id, data) {
    return APIService.httpPutRequest(process.env.REACT_APP_VMS_VEHICLEMONITORS_API_URL, id, data);
}

function deleteVehicleMonitorDetails(id) {
    return APIService.httpDeleteRequest(process.env.REACT_APP_VMS_VEHICLEMONITORS_API_URL, id);
}

export { getVehicleMonitorDetails, getVehicleMonitorData, addVehicleMonitorDetails, editVehicleMonitorDetails, deleteVehicleMonitorDetails };