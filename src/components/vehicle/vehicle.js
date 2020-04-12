import React, { Component } from 'react';
import VehicleData from './vehicleData';
import * as VehicleServices from './vehicle.service';
import { Link } from 'react-router-dom';
import Loading from './../layout/loading';

class Vehicle extends Component {

    state = {
        showVehicleData: true,
        vehicleDetails: [],
        loading: true
    }

  componentDidMount() {
      VehicleServices.getVehicleDetails()
          .then(res => {
              console.log('Response from server is :: ', res);
              this.setState({ vehicleDetails: res.data });
              this.setState({ loading: false });
          })
          .catch(function (error) {
              console.log(error);
          });
  }
  
  render() {
    let { vehicleDetails, loading } = this.state
    return(
      <div>
          <div class="container-fluid">
              <h3 class="text-center my-3"><i className="fa fa-bus" aria-hidden="true" /> Vehicle</h3>
          </div>
          <hr/>
          <div class="container">
              <div class="table-wrapper">
                  <div class="table-title">
                      <div class="row">
                          <div class="col-sm-8"><h2><b>Vehicle</b> Details</h2></div>
                          <div class="col-sm-4">
                              <Link to="/vehicle/add">
                                  <button type="button" class="btn btn-info add-new"><i class="fa fa-plus"></i> Add Vehicle</button>
                              </Link>
                          </div>
                      </div>
                  </div>
                  <table class="table table-bordered">
                      <thead>
                          <tr>
                              <th>Name</th>
                              <th>Registration Number</th>
                              <th>Action</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              vehicleDetails && vehicleDetails.map(vehicle => <VehicleData key={vehicle._id} data={vehicle} />)
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

export default Vehicle;
