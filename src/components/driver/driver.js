import React, { Component } from 'react';
import DriverData from './driverData';
import * as DriverServices from './driver.service';
import { Link } from 'react-router-dom';
import Loading from './../layout/loading';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Driver extends Component {

    state = {
        showDriverData: true,
        driverDetails: [],
        loading: true
    }

    onDeleteDriver = (driver) => {
        confirmAlert({
            message: `Are you sure to delete ${driver.name}?.`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        let id = driver._id;
                        this.setState({ loading: true });
                        DriverServices.deleteDriverDetails(id)
                        .then(res => {
                            let driverDetails = this.state.driverDetails.slice();
                            driverDetails = driverDetails.filter(driver => {
                                return driver._id !== id
                            });
                            this.setState({ "driverDetails": driverDetails });
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
        DriverServices.getDriverDetails()
        .then(res => {
            this.setState({ driverDetails: res.data });
            this.setState({ loading: false });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        let { driverDetails, loading } = this.state
        return (
            <div>
                <div className="container-fluid">
                    <h3 className="text-center my-3"><i className="fa fa-user-o" aria-hidden="true" /> Driver</h3>
                </div>
                <hr />
                <div className="container">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-8"><h2><b>Driver</b> Details</h2></div>
                                <div className="col-sm-4">
                                    <Link to="/driver/add">
                                        <button type="button" className="btn btn-info add-new"><i className="fa fa-plus"></i> Add Driver</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <table className="table table-bordered">
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
                                    !loading && driverDetails && driverDetails.map(driver => <DriverData key={driver._id} data={driver} onDeleteDriver={this.onDeleteDriver} />)
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

export default Driver;
