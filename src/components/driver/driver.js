import React, { Component } from 'react';
import DriverData from './driverData';
import * as DriverServices from './driver.service';
import { Link } from 'react-router-dom';

class Driver extends Component {

    state = {
        showDriverData: true,
        driverDetails: []
    }

    componentDidMount() {
        DriverServices.getDriverDetails()
            .then(res => {
                console.log('Response from server is :: ', res);
                this.setState({ driverDetails: res.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        let { driverDetails } = this.state
        return (
            <div>
                <div class="container-fluid">
                    <h3 class="text-center my-3"><i className="fa fa-user-o" aria-hidden="true" /> Driver</h3>
                </div>
                <hr/>
                <div class="container">
                    <div class="table-wrapper">
                        <div class="table-title">
                            <div class="row">
                                <div class="col-sm-8"><h2><b>Driver</b> Details</h2></div>
                                <div class="col-sm-4">
                                    <Link to="/driver/add">
                                        <button type="button" class="btn btn-info add-new"><i class="fa fa-plus"></i> Add Driver</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Phone</th>
                                    <th>Identity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    driverDetails && driverDetails.map(driver => <DriverData key={driver._id} data={driver} />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Driver;
