import React, { Component } from 'react';
import DriverMessengerData from './driverMessengerData';
import * as DriverMessengerServices from './driverMessenger.service';
import { Link } from 'react-router-dom';
import Loading from './../layout/loading';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class DriverMessenger extends Component {
    state = {
        showDriverMessengerData: true,
        driverMessengerDetails: [],
        loading: true
    }

    onDeleteDriverMessenger = (driverMessenger) => {
        confirmAlert({
            message: `Are you sure to delete?.`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        let id = driverMessenger._id;
                        this.setState({ loading: true });
                        DriverMessengerServices.deleteDriverMessengerDetails(id)
                        .then(res => {
                            let driverMessengerDetails = this.state.driverMessengerDetails.slice();
                            driverMessengerDetails = driverMessengerDetails.filter(driverMessenger => {
                                return driverMessenger._id !== id
                            });
                            this.setState({ "driverMessengerDetails": driverMessengerDetails });
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
        DriverMessengerServices.getDriverMessengerDetails()
        .then(res => {
            this.setState({ driverMessengerDetails: res.data });
            this.setState({ loading: false });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

render() {
  let { driverMessengerDetails, loading } = this.state
    return(
      <div>
          <div className="container-fluid">
              <h3 className="text-center my-3"><i className="fa fa-comments-o" aria-hidden="true" /> Driver Messages</h3>
          </div>
          <hr/>
          <div className="container">
              <div className="table-wrapper">
                  <div className="table-title">
                      <div className="row">
                          <div className="col-sm-8"><h2><b>Driver Messages </b> Details</h2></div>
                          <div className="col-sm-4">
                              <Link to="/driverMessenger/add">
                                  <button type="button" className="btn btn-info add-new"><i className="fa fa-plus"></i> Add Driver Message</button>
                              </Link>
                          </div>
                      </div>
                  </div>
                  <table className="table table-bordered">
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
                              !loading && driverMessengerDetails && driverMessengerDetails.map(driverMessenger => <DriverMessengerData key={driverMessenger._id} data={driverMessenger} onDeleteDriverMessenger={this.onDeleteDriverMessenger} />)
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

export default DriverMessenger;
