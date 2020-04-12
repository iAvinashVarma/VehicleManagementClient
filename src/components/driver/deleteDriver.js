import React, { Component } from 'react';
import * as DriverServices from './driver.service';
import Error from './../layout/error';

export default class DeleteDriver extends Component {
    state = {
        error: false
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log("Delete ID: " + id);
        DriverServices.deleteDriverDetails(id)
            .then(res => {
                console.log('Response from server is :: ', res);
                this.props.history.push('/driver');
            })
            .catch(error => {
                console.log(error);
                this.setState({ error: true });
            })
    }

    render() {
        const { error } = this.state;
        return (
            <div>
            {
                !error && <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Driver Deleted!</strong>...
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>
            }
            <Error error={error} />
            </div>
        )
    }
}