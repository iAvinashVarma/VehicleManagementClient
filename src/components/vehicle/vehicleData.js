import React, { Component } from 'react';

class VehicleData extends Component {

    onDeleteVehicle(vehicle) {
        this.props.onDeleteVehicle(vehicle);
    }

    render() {
        const { _id: id, name, registrationNumber } = this.props.data;
        return (
            <tr id={id}>
                <td>{name}</td>
                <td>{registrationNumber}</td>
                <td>
                    <a className="edit" title="Edit" href={'/vehicle/edit/' + id} data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                    <a className="delete" title="Delete" onClick={this.onDeleteVehicle.bind(this, this.props.data)} data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a>
                </td>
            </tr>
        )
    }
}

export default VehicleData;
