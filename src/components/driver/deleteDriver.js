import React, { Component } from 'react';
import * as DriverServices from './driver.service';

export default class AddDriver extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        console.log("Delete ID: " + id);
        DriverServices.deleteDriverDetails(id)
            .then(res => {
                console.log('Response from server is :: ', res);
                this.props.history.push('/driver');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Driver Deleted!</strong> Loading the data.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
        )
    }
}