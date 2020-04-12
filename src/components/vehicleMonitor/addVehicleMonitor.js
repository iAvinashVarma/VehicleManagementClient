import React, { Component } from 'react';
import TextInputGroup from '../layout/textInputGroup';
import * as DriverServices from './../driver/driver.service';
import * as VehicleServices  from './../vehicle/vehicle.service';
import * as VehicleMonitorServices from './vehicleMonitor.service';
import Loading from './../layout/loading';
import Error from './../layout/error';

export default class AddVehicleMonitor extends Component {
    constructor(props) {
        super(props);
        this.latitudeInput = React.createRef();
        this.longitudeInput = React.createRef();
        this.pressurePsiInput = React.createRef();
        this.temperatureCelsiusInput = React.createRef();
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
        const vehicleMonitor = {
            vehicleId: this.state.vehicleId,
            driverId: this.state.driverId,
            location: {
                latitude: this.latitudeInput.current.value,
                longitude: this.longitudeInput.current.value
            },
            pressure: {
                pressurePsi: this.pressurePsiInput.current.value
            },
            temperature: {
                temperatureCelsius: this.temperatureCelsiusInput.current.value
            }
        };
        if (vehicleMonitor.vehicleId === '') {
            this.setState({ errors: { message: 'Vehicle required' } });
            return;
        }
        if (vehicleMonitor.driverId === '') {
            this.setState({ errors: { message: 'Driver required' } });
            return;
        }
        if (vehicleMonitor.location.latitude === '') {
            this.setState({ errors: { message: 'Latitude required' } });
            return;
        }
        if (vehicleMonitor.location.longitude === '') {
            this.setState({ errors: { message: 'Longitude required' } });
            return;
        }
        if (vehicleMonitor.pressure.pressurePsi === '') {
            this.setState({ errors: { message: 'PressurePsi required' } });
            return;
        }
        if (vehicleMonitor.temperature.temperatureCelsius === '') {
            this.setState({ errors: { message: 'TemperatureCelsius required' } });
            return;
        }
        this.setState({ loading: true });
        this.latitudeInput.current.value = '';
        this.longitudeInput.current.value = '';
        this.pressurePsiInput.current.value = '';
        this.temperatureCelsiusInput.current.value = '';
        VehicleMonitorServices.addVehicleMonitorDetails(vehicleMonitor)
        .then(res => {
            console.log('Add Vehicle Monitor response :: ', res);
            this.setState({ loading: false });
            this.props.history.push('/vehicleMonitor');
        })
        .catch(error => {
            this.setState({ submitError: error.message });
            this.setState({ error: true });
        });
    }

    render() {
        const { latitude, longitude, pressurePsi, temperatureCelsius } = this.props;
        const { errors, loading, error, vehicles, drivers } = this.state;
        return (
            <div>
                <div class="container-fluid">
                    <h3 class="text-center my-3"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Add Vehicle Monitor</h3>
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
                            name="latitude"
                            type="number"
                            placeholder="Enter Latitude . . ."
                            value={latitude}
                            refName={this.latitudeInput}
                            label="Latitude"
                            error={errors.latitude}
                        />
                        <TextInputGroup
                            name="longitude"
                            type="number"
                            placeholder="Enter Longitude . . ."
                            value={longitude}
                            refName={this.longitudeInput}
                            label="Longitude"
                            error={errors.longitude}
                        />
                        <TextInputGroup
                            name="pressurePsi"
                            type="number"
                            placeholder="Enter PressurePsi . . ."
                            value={pressurePsi}
                            refName={this.pressurePsiInput}
                            label="Pressure Psi"
                            error={errors.pressurePsi}
                        />
                        <TextInputGroup
                            name="temperatureCelsius"
                            type="number"
                            placeholder="Enter TemperatureCelsius . . ."
                            value={temperatureCelsius}
                            refName={this.temperatureCelsiusInput}
                            label="Temperature Celsius"
                            error={errors.temperatureCelsius}
                        />
                        <input class="btn btn-primary" type="submit" value="Add Vehicle Monitor"></input>
                    </form>
                }  
                </div>
                <Loading loading={loading && !error} />
                <Error error={error} />
            </div>
        )
    }
}