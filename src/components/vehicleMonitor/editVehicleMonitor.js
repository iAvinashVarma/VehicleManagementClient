import React, { Component } from 'react';
import TextInputGroup from '../layout/textInputGroup';
import * as VehicleMonitorServices from './vehicleMonitor.service';
import Loading from './../layout/loading';
import Error from './../layout/error';

export default class EditVehicleMonitor extends Component {
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
        vehicleId: '',
        driverId: '',
        vehicleName: '',
        driverName: ''
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log("Edit ID: " + id);
        VehicleMonitorServices.getVehicleMonitorData(id)
        .then(res => {
            console.log('Vehicle Monitor response :: ', res);
            const vehicleMonitor = res.data;
            this.setState({ loading: false });
            if(vehicleMonitor){
                this.setState({ 
                    vehicleId: vehicleMonitor.vehicle._id, 
                    driverId: vehicleMonitor.driver._id,
                    vehicleName: vehicleMonitor.vehicle.name,
                    driverName: vehicleMonitor.driver.name  
                });
                this.latitudeInput.current.value = vehicleMonitor.vehicleMonitor.location.latitude;
                this.longitudeInput.current.value = vehicleMonitor.vehicleMonitor.location.longitude;
                this.pressurePsiInput.current.value = vehicleMonitor.vehicleMonitor.pressure.pressurePsi;
                this.temperatureCelsiusInput.current.value = vehicleMonitor.vehicleMonitor.temperature.temperatureCelsius;
            }
        })
        .catch(error => {
            this.setState({ submitError: error.message });
            this.setState({ error: true });
        })
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
        }
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
        VehicleMonitorServices.editVehicleMonitorDetails(this.props.match.params.id, vehicleMonitor)
        .then(res => {
            console.log('Edit Vehicle Monitor response :: ', res);
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
        const { errors, loading, error, vehicleName, driverName } = this.state;
        return (
            <div>
                <div class="container-fluid">
                    <h3 class="text-center my-3"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Vehicle Monitor</h3>
                </div>
                <hr/>
                <div class="container">
                    {
                        !loading && <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="vehicleName">Vehicle Name</label>
                            <input class='form-control form-control-lg' type="text" name="vehicleName" value={vehicleName} disabled/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="driverName">Driver Name</label>
                            <input class='form-control form-control-lg' type="text" name="driverName" value={driverName} disabled/>
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
                        <input class="btn btn-primary" type="submit" value="Update Vehicle Monitor"></input>
                    </form>
                }  
                </div>
                <Loading loading={loading && !error} />
                <Error error={error} />
            </div>
        )
    }
}