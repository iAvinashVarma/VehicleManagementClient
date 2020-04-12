import React, { Component } from 'react';
import TextInputGroup from '../layout/textInputGroup';
import * as DriverServices from './driver.service';

export default class EditDriver extends Component {

    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
        this.phoneInput = React.createRef();
        this.ageInput = React.createRef();
        this.identityInput = React.createRef();
    }

    state = {
        errors: {},
        submitError: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log("Edit ID: " + id);
        DriverServices.getDriverData(id)
        .then(res => {
            console.log('Driver response :: ', res);
            const driver = res.data;
            if(driver){
                this.nameInput.current.value = driver.name;
                this.phoneInput.current.value = driver.phone;
                this.ageInput.current.value = driver.age;
                this.identityInput.current.value = driver.identity;
            }
        })
        .catch(error => {
            this.setState({ submitError: error.message });
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const driver = {
            name: this.nameInput.current.value,
            phone: this.phoneInput.current.value,
            age: this.ageInput.current.value,
            identity: this.identityInput.current.value
        }
        if (driver.name === '') {
            this.setState({ errors: { name: 'Name required' } });
            return;
        }
        if (driver.age === '') {
            this.setState({ errors: { age: 'Age required' } });
            return;
        }
        if (driver.phone === '') {
            this.setState({ errors: { phone: 'Phone required' } });
            return;
        }
        if (driver.identity === '') {
            this.setState({ errors: { identity: 'Identity required' } });
            return;
        }
        this.nameInput.current.value = '';
        this.phoneInput.current.value = '';
        this.ageInput.current.value = '';
        this.identityInput.current.value = '';
        DriverServices.editDriverDetails(this.props.match.params.id, driver)
        .then(res => {
            console.log('Add driver response :: ', res);
            this.props.history.push('/driver');
        })
        .catch(error => {
            this.setState({ submitError: error.message });
        })

    }

    render() {
        const { name, phone, age, identity } = this.props;
        const { errors } = this.state;
        return (
            <div>
                <div class="container-fluid">
                    <h3 class="text-center my-3"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Driver</h3>
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
                            name="age"
                            type="number"
                            placeholder="Enter Age . . ."
                            value={age}
                            refName={this.ageInput}
                            label="Age"
                            error={errors.age}
                        />
                        <TextInputGroup
                            name="phone"
                            type="text"
                            placeholder="Enter Phone . . ."
                            value={phone}
                            refName={this.phoneInput}
                            label="Phone"
                            error={errors.phone}
                        />
                        <TextInputGroup
                            name="identity"
                            type="text"
                            placeholder="Enter Identity . . ."
                            value={identity}
                            refName={this.identityInput}
                            label="identity"
                            error={errors.identity}
                        />
                        <input class="btn btn-secondary" type="submit" value="Update Driver"></input>
                    </form>
                </div>
            </div>
        )
    }
}