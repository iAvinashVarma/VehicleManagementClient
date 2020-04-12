import React, { Component } from 'react';
import DriverMessengerData from './driverMessengerData';
import * as DriverMessengerServices from './driverMessenger.service';
import { Link } from 'react-router-dom';

class DriverMessenger extends Component {
    state = {
        showDriverMessengerData: true,
        driverMessengerDetails: []
    }

    componentDidMount() {
        DriverMessengerServices.getDriverMessengerDetails()
        .then(res => {
            console.log('Response from server is :: ', res);
            this.setState({
                driverMessengerDetails: res.data 
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }

render() {
  let { driverMessengerDetails } = this.state
    return(
      <div>
          <div class="container-fluid">
              <h3 class="text-center my-3">Driver Messagenger</h3>
          </div>
          <hr/>
          <div class="container">
              <div class="table-wrapper">
                  <div class="table-title">
                      <div class="row">
                          <div class="col-sm-8"><h2><b>Driver Messagenger </b> Details</h2></div>
                          <div class="col-sm-4">
                              <Link to="/vehicle/add">
                                  <button type="button" href="/vehicle/add" class="btn btn-info add-new"><i class="fa fa-plus"></i> Add Vehicle</button>
                              </Link>
                          </div>
                      </div>
                  </div>
                  <table class="table table-bordered">
                      <thead>
                          <tr>
                              <th>Vehicle</th>
                              <th>Driver</th>
                              <th>Message</th>
                              <th>Action</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              driverMessengerDetails && driverMessengerDetails.map(driverMessenger => <DriverMessengerData key={driverMessenger._id} data={driverMessenger} />)
                          }
                      </tbody>
                  </table>
              </div>
          </div> 
      </div>
    )
  }
}

export default DriverMessenger;
