import React, { Component } from 'react';
import TextInputGroup from '../layout/textInputGroup';
import * as DriverMessengerServices from './driverMessenger.service';
import Loading from './../layout/loading';
import Error from './../layout/error';

export default class EditDriverMessenger extends Component {
    constructor(props) {
        super(props);
        this.messageInput = React.createRef();
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
        DriverMessengerServices.getDriverMessengerData(id)
        .then(res => {
            const driverMessenger = res.data;
            this.setState({ loading: false });
            if(driverMessenger){
                this.setState({ 
                    vehicleId: driverMessenger.vehicle._id, 
                    driverId: driverMessenger.driver._id,
                    vehicleName: driverMessenger.vehicle.name,
                    driverName: driverMessenger.driver.name  
                });
                this.messageInput.current.value = driverMessenger.driverMessage.message;
            }
        })
        .catch(error => {
            this.setState({ submitError: error.message });
            this.setState({ error: true });
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const driverMessenger = {
            vehicleId: this.state.vehicleId,
            driverId: this.state.driverId,
            message: this.messageInput.current.value
        }
        if (driverMessenger.message === '') {
            this.setState({ errors: { message: 'Message required' } });
            return;
        }
        this.setState({ loading: true });
        this.messageInput.current.value = '';
        DriverMessengerServices.editDriverMessengerDetails(this.props.match.params.id, driverMessenger)
        .then(res => {
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
        const { errors, loading, error, vehicleName, driverName } = this.state;
        return (
            <div>
                <div className="container-fluid">
                    <h3 className="text-center my-3"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Driver Message</h3>
                </div>
                <hr/>
                <div className="container">
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
                            name="message"
                            type="text"
                            placeholder="Enter message . . ."
                            value={message}
                            refName={this.messageInput}
                            label="Message"
                            error={errors.message}
                        />
                        <input className="btn btn-info" type="submit" value="Update Driver Message"></input>
                    </form>
                }  
                </div>
                <Loading loading={loading && !error} />
                <Error error={error} />
            </div>
        )
    }
}