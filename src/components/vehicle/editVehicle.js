import React, { Component } from 'react';
import TextInputGroup from '../layout/textInputGroup';
import * as VehicleServices from './vehicle.service';
import Loading from './../layout/loading';
import Error from './../layout/error';

export default class EditVehicle extends Component {

    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
        this.registrationNumberInput = React.createRef();
    }

    state = {
        errors: {},
        submitError: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log("Edit ID: " + id);
        VehicleServices.getVehicleData(id)
        .then(res => {
            console.log('Vehicle response :: ', res);
            const vehicle = res.data;
            this.setState({ loading: false });
            if(vehicle){
                this.nameInput.current.value = vehicle.name;
                this.registrationNumberInput.current.value = vehicle.registrationNumber;
            }
        })
        .catch(error => {
            this.setState({ submitError: error.message });
            this.setState({ error: true });
        })
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
        VehicleServices.editVehicleDetails(this.props.match.params.id, vehicle)
        .then(res => {
            console.log('Edit vehicle response :: ', res);
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
                <div class="container-fluid">
                    <h3 class="text-center my-3"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Vehicle</h3>
                </div>
                <hr/>
                <div class="container">
                {
                    !loading && <form onSubmit={this.onSubmit.bind(this)}>
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
                        <input class="btn btn-info" type="submit" value="Update Vehicle"></input>
                    </form>
                }           
                </div>
                <Loading loading={loading && !error} />
                <Error error={error} />
            </div>
        )
    }
}