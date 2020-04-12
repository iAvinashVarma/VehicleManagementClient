import * as APIService from '../../actions/common/api.service';

function getVehicleMonitorDetails() {
    return APIService.httpGetRequest(process.env.REACT_APP_VMS_VEHICLEMONITORS_API_URL);
}

function addVehicleMonitorDetails(data) {
    return APIService.httpPostRequest(process.env.REACT_APP_VMS_VEHICLEMONITORS_API_URL, data);
}

function editVehicleMonitorDetails() {
    return APIService.httpGetRequest(process.env.REACT_APP_VMS_VEHICLEMONITORS_API_URL);
}

export { getVehicleMonitorDetails, addVehicleMonitorDetails, editVehicleMonitorDetails };