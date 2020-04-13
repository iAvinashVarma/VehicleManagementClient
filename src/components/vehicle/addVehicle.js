import React, { Component } from 'react';
import TextInputGroup from '../layout/textInputGroup';
import * as VehicleServices  from './vehicle.service';
import Loading from './../layout/loading';
import Error from './../layout/error';

export default class AddVehicle extends Component {

    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
        this.registrationNumberInput = React.createRef();
    }

    state = {
        errors: {},
        submitError: {},
        loading: false,
        error: false
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const vehicle = {
            name: this.nameInput.current.value,
            registrationNumber: this.registrationNumberInput.current.value
        }
        if (vehicle.name === '') {
            this.setState({ errors: { name: 'Name required' } });
            return;
        }
        if (vehicle.registrationNumber === '') {
            this.setState({ errors: { registrationNumber: 'RegistrationNumber required' } });
            return;
        }
        this.setState({ loading: true });
        this.nameInput.current.value = '';
        this.registrationNumberInput.current.value = '';
        VehicleServices.addVehicleDetails(vehicle)
        .then(res => {
            this.setState({ loading: false });
            this.props.history.push('/vehicle');
        })
        .catch(error => {
            this.setState({ submitError: error.message });
            this.setState({ error: true });
        });
    }

    render() {
        const { name, registrationNumber } = this.props;
        const { errors, loading, error } = this.state;
        return (
            <div>
                <div className="container-fluid">
                    <h3 className="text-center my-3"><i className="fa fa-plus-square-o" aria-hidden="true"></i> Add Vehicle</h3>
                </div>
                <hr/>
                <div className="container">
                    {
                        !loading &&  <form onSubmit={this.onSubmit.bind(this)}>
                            <TextInputGroup
                                name="name"
                                type="text"
                                placeholder="Enter Name . . ."
                                value={name}
                                refName={this.nameInput}
                                label="Full Name"
                                error={errors.name}
                            />
                            <TextInputGroup
                                name="registrationNumber"
                                type="text"
                                placeholder="Enter RegistrationNumber . . ."
                                value={registrationNumber}
                                refName={this.registrationNumberInput}
                                label="RegistrationNumber"
                                error={errors.registrationNumber}
                            />
                            <input className="btn btn-primary" type="submit" value="Add Vehicle"></input>
                        </form>
                    }
                    <Loading loading={loading && !error} />
                    <Error error={error} />
                </div>
            </div>
        )
    }
}
