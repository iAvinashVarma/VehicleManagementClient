import React, { Component } from 'react';
// import { Table, TableHeader } from 'react-mdl';
import Header from '../layout/header';
import DriverData from './driverData';

class Driver extends Component {
    render() {
        return (
            <div>
                <Header title="Driver" />
                <DriverData />
            </div>
        )
    }
}

export default Driver;
