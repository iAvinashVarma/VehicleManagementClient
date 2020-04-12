import React, { Component } from 'react';
import TextInputGroup from '../layout/textInputGroup';
import { addDriverMessengerDetails } from './driverMessenger.service'

export default class AddDriverMessenger extends Component {

    constructor(props) {
        super(props);
        this.vehicleInput = React.createRef();
        this.driverInput = React.createRef();
        this.messageInput = React.createRef();
    }

    state = {
        errors: {},
        submitError: {}
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const driverMessenger = {
            vehicle: this.vehicleInput.current.value,
            driver: this.driverInput.current.value,
            message: this.messageInput.current.value
        }
        if (driverMessenger.vehicle === '') {
            this.setState({ errors: { name: 'Vehicle required' } });
            return;
        }
        if (driverMessenger.driver === '') {
            this.setState({ errors: { driver: 'Driver required' } });
            return;
        }
        if (driverMessenger.message === '') {
            this.setState({ errors: { message: 'Message required' } });
            return;
        }
        this.vehicleInput.current.value = '';
        this.driverInput.current.value = '';
        this.messageInput.current.value = '';
        addDriverMessengerDetails(driverMessenger)
            .then(res => {
                console.log('Add Driver Messenger response :: ', res);
                this.props.history.push('/driverMessenger');
            })
            .catch(error => {
                this.setState({ submitError: error.message });
            })

    }

    render() {
        const { vehicle, driver, message } = this.props;
        const { errors } = this.state;
        return (
            <div>
                <div class="container-fluid">
                    <h3 class="text-center my-3"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Add Driver Message</h3>
                </div>
                <hr/>
                <div class="container">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <TextInputGroup
                            name="vehicle"
                            type="text"
                            placeholder="Enter Vehicle Name . . ."
                            value={vehicle}
                            refName={this.vehicleInput}
                            label="Vehicle Name"
                            error={errors.vehicle}
                        />
                        <TextInputGroup
                            name="driver"
                            type="text"
                            placeholder="Enter Driver Name . . ."
                            value={driver}
                            refName={this.driverInput}
                            label="Driver"
                            error={errors.driver}
                        />
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
                </div>
            </div>
        )
    }
}
