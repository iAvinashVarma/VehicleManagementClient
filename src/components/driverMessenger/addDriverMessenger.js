import React, { Component } from 'react';
import TextInputGroup from '../layout/textInputGroup';
import * as DriverServices from './../driver/driver.service';
import * as VehicleServices  from './../vehicle/vehicle.service';
import * as DriverMessengerServices from './driverMessenger.service'
import Loading from './../layout/loading';
import Error from './../layout/error';

export default class AddDriverMessenger extends Component {

    constructor(props) {
        super(props);
        this.messageInput = React.createRef();
    }

    state = {
        errors: {},
        submitError: {},
        loading: true,
        error: false,
        vehicles: [],
        drivers: [],
        vehicleId: '',
        driverId: ''
    }

    componentDidMount() {
        DriverServices.getDriverDetails()
        .then(res => {
            console.log('Driver response :: ', res);
            const drivers = res.data;
            this.setState({ drivers: drivers });
            if(drivers){
                this.setState({ driverId: drivers[0]._id });
            }
        })
        .catch(error => {
            this.setState({ submitError: error.message });
            this.setState({ error: true });
        });
        VehicleServices.getVehicleDetails()
        .then(res => {
            console.log('Response from server is :: ', res);
            const vehicles = res.data;
            this.setState({ vehicles: vehicles });
            if(vehicles){
                this.setState({ vehicleId: vehicles[0]._id });
            }
            this.setState({ loading: false });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    driverSelection = (e) => {
        this.setState({ driverId: e.target.value }, () => {console.log(this.state.driverId)});
    }

    vehicleSelection = (e) => {
        this.setState({ vehicleId: e.target.value }, () => {console.log(this.state.vehicleId)});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const driverMessenger = {
            vehicleId: this.state.vehicleId,
            driverId: this.state.driverId,
            message: this.messageInput.current.value
        }
        if (driverMessenger.vehicleId === '') {
            this.setState({ errors: { message: 'Vehicle required' } });
            return;
        }
        if (driverMessenger.driverId === '') {
            this.setState({ errors: { message: 'Driver required' } });
            return;
        }
        if (driverMessenger.message === '') {
            this.setState({ errors: { message: 'Message required' } });
            return;
        }
        this.setState({ loading: true });
        this.messageInput.current.value = '';
        DriverMessengerServices.addDriverMessengerDetails(driverMessenger)
        .then(res => {
            console.log('Add Driver Messenger response :: ', res);
            this.setState({ loading: false });
            this.props.history.push('/driverMessenger');
        })
        .catch(error => {
            this.setState({ submitError: error.message });
            this.setState({ error: true });
        });
    }

    render() {
        const { message } = this.props;
        const { errors, loading, error, vehicles, drivers } = this.state;
        return (
            <div>
                <div class="container-fluid">
                    <h3 class="text-center my-3"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Add Driver Message</h3>
                </div>
                <hr/>
                <div class="container">
                    {
                        !loading && <form onSubmit={this.onSubmit.bind(this)}>
                        <div class="form-group">
                            <label for="sel1">Select Vehicle Name:</label>
                            <select onChange={this.vehicleSelection} class="form-control">
                                { vehicles.map(item =>(
                                <option key={item._id} value={item._id}>{item.name}</option>
                                )) }
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="sel1">Select Driver Name:</label>
                            <select onChange={this.driverSelection} class="form-control" id="sel1">
                                { drivers.map(item =>(
                                <option key={item._id} value={item._id}>{item.name}</option>
                                )) }
                            </select>
                        </div>
                        <TextInputGroup
                            name="message"
                            type="text"
                            placeholder="Enter message . . ."
                            value={message}
                            refName={this.messageInput}
                            label="Message"
                            error={errors.message}
                        />
                        <input class="btn btn-primary" type="submit" value="Add Driver Message"></input>
                    </form>
                }  
                </div>
                <Loading loading={loading && !error} />
                <Error error={error} />
            </div>
        )
    }
}
