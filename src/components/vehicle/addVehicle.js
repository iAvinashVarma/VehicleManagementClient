import React, { Component } from 'react';
import TextInputGroup from '../layout/textInputGroup';
import { addVehicleDetails } from './vehicle.service'

export default class AddVehicle extends Component {

    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
        this.phoneInput = React.createRef();
        this.ageInput = React.createRef();
        this.identityInput = React.createRef();
    }

    state = {
        errors: {},
        sbumitError: {}
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
        this.nameInput.current.value = '';
        this.registrationNumberInput.current.value = '';
        addVehicleDetails(vehicle)
            .then(res => {
                console.log('Add vehicle response :: ', res);
                this.props.history.push('/vehicle');
            })
            .catch(error => {
                this.setState({ sbumitError: error.message });
            })

    }

    render() {
        const { name, registrationNumber } = this.props;
        const { errors } = this.state;
        return (
            <div>
                <div class="container-fluid">
                    <h3 class="text-center my-3">Add Vehicle</h3>
                </div>
                <hr/>
                <div class="container">
                    <form onSubmit={this.onSubmit.bind(this)}>
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
                        <input class="btn btn-primary" type="submit" value="Add Vehicle"></input>
                    </form>
                </div>
            </div>
        )
    }
}
