import React, { Component } from 'react';
import VehicleMonitorData from './vehicleMonitorData';
import * as VehicleMonitorServices from './vehicleMonitor.service';
import { Link } from 'react-router-dom';
import Loading from './../layout/loading';

class VehicleMonitor extends Component {

  state = {
    showVehicleMonitorData: true,
    vehicleMonitorDetails: [],
    loading: true
  }
  componentDidMount() {
    VehicleMonitorServices.getVehicleMonitorDetails()
      .then(res => {
          console.log('Response from server is :: ', res);
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
          <div class="container-fluid">
              <h3 class="text-center my-3"><i className="fa fa-television" aria-hidden="true" /> Vehicle Monitor</h3>
          </div>
          <hr/>
          <div class="container">
              <div class="table-wrapper">
                  <div class="table-title">
                      <div class="row">
                          <div class="col-sm-8"><h2><b>Vehicle Monitor </b> Details</h2></div>
                          <div class="col-sm-4">
                              <Link to="/vehicleMonitor/add">
                                  <button type="button" href="/vehicleMonitor/add" class="btn btn-info add-new"><i class="fa fa-plus"></i> Add Vehicle Monitor</button>
                              </Link>
                          </div>
                      </div>
                  </div>
                  <table class="table table-bordered">
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
                              !loading && vehicleMonitorDetails && vehicleMonitorDetails.map(vehicleMonitor => <VehicleMonitorData key={vehicleMonitor._id} data={vehicleMonitor} />)
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
