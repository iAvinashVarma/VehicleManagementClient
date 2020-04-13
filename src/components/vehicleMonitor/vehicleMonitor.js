import React, { Component } from 'react';
import VehicleMonitorData from './vehicleMonitorData';
import * as VehicleMonitorServices from './vehicleMonitor.service';
import { Link } from 'react-router-dom';
import Loading from './../layout/loading';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class VehicleMonitor extends Component {

  state = {
    showVehicleMonitorData: true,
    vehicleMonitorDetails: [],
    loading: true
  }

  onDeleteVehicleMonitor = (vehicleMonitor) => {
        confirmAlert({
            message: `Are you sure to delete?.`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        let id = vehicleMonitor._id;
                        this.setState({ loading: true });
                        VehicleMonitorServices.deleteVehicleMonitorDetails(id)
                        .then(res => {
                            let vehicleMonitorDetails = this.state.vehicleMonitorDetails.slice();
                            vehicleMonitorDetails = vehicleMonitorDetails.filter(vehicleMonitor => {
                                return vehicleMonitor._id !== id
                            });
                            this.setState({ "vehicleMonitorDetails": vehicleMonitorDetails });
                            this.setState({ loading: false });
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                    }
                },
                {
                    label: 'No',
                    onClick: () => console.log('No')
                }
            ]
        });
    }

  componentDidMount() {
    VehicleMonitorServices.getVehicleMonitorDetails()
      .then(res => {
          this.setState({ vehicleMonitorDetails: res.data });
          this.setState({ loading: false });
      })
      .catch(function (error) {
          console.log(error);
      });
  }
  render() {
    let { vehicleMonitorDetails, loading } = this.state
    return(
      <div>
          <div className="container-fluid">
              <h3 className="text-center my-3"><i className="fa fa-television" aria-hidden="true" /> Vehicle Monitor</h3>
          </div>
          <hr/>
          <div className="container">
              <div className="table-wrapper">
                  <div className="table-title">
                      <div className="row">
                          <div className="col-sm-8"><h2><b>Vehicle Monitor </b> Details</h2></div>
                          <div className="col-sm-4">
                              <Link to="/vehicleMonitor/add">
                                  <button type="button" href="/vehicleMonitor/add" className="btn btn-info add-new"><i className="fa fa-plus"></i> Add Vehicle Monitor</button>
                              </Link>
                          </div>
                      </div>
                  </div>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th>Vehicle</th>
                              <th>Driver</th>
                              <th>Location</th>
                              <th>PressurePsi</th>
                              <th>Temp °C</th>
                              <th>Action</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              !loading && vehicleMonitorDetails && vehicleMonitorDetails.map(vehicleMonitor => <VehicleMonitorData key={vehicleMonitor._id} data={vehicleMonitor} onDeleteVehicleMonitor={this.onDeleteVehicleMonitor} />)
                          }
                      </tbody>
                  </table>
              </div>
          </div> 
          <Loading loading={loading} />
      </div>
    )
  }
}

export default VehicleMonitor;
