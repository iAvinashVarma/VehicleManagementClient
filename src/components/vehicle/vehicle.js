import React, { Component } from 'react';
import VehicleData from './vehicleData';
import * as VehicleServices from './vehicle.service';
import { Link } from 'react-router-dom';
import Loading from './../layout/loading';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Vehicle extends Component {

    state = {
        showVehicleData: true,
        vehicleDetails: [],
        loading: true
    }

    onDeleteVehicle = (vehicle) => {
        confirmAlert({
            message: `Are you sure to delete ${vehicle.name}?.`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        let id = vehicle._id;
                        this.setState({ loading: true });
                        VehicleServices.deleteVehicleDetails(id)
                        .then(res => {
                            let vehicleDetails = this.state.vehicleDetails.slice();
                            vehicleDetails = vehicleDetails.filter(vehicle => {
                                return vehicle._id !== id
                            });
                            this.setState({ "vehicleDetails": vehicleDetails });
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
            VehicleServices.getVehicleDetails()
            .then(res => {
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
          <div className="container-fluid">
              <h3 className="text-center my-3"><i className="fa fa-bus" aria-hidden="true" /> Vehicle</h3>
          </div>
          <hr/>
          <div className="container">
              <div className="table-wrapper">
                  <div className="table-title">
                      <div className="row">
                          <div className="col-sm-8"><h2><b>Vehicle</b> Details</h2></div>
                          <div className="col-sm-4">
                              <Link to="/vehicle/add">
                                  <button type="button" className="btn btn-info add-new"><i className="fa fa-plus"></i> Add Vehicle</button>
                              </Link>
                          </div>
                      </div>
                  </div>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th>Name</th>
                              <th>Registration Number</th>
                              <th>Action</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              !loading && vehicleDetails && vehicleDetails.map(vehicle => <VehicleData key={vehicle._id} data={vehicle} onDeleteVehicle={this.onDeleteVehicle} />)
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
