import React, { Component } from 'react';

class DriverMessengerData extends Component {

    onDeleteDriverMessenger(driver) {
        this.props.onDeleteDriverMessenger(driver);
    }

    render() {
        const { _id: id, vehicle, driver, driverMessage } = this.props.data;
        return (
            vehicle && driver && <tr id={id}>
                <td>{vehicle.name}</td>
                <td>{driver.name}</td>
                <td>{driverMessage.message}</td>
                <td>
                    <a className="edit" title="Edit" href={'/driverMessenger/edit/' + id} data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                    <a className="delete" title="Delete" onClick={this.onDeleteDriverMessenger.bind(this, this.props.data)} data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a>
                </td>
            </tr>
        )
    }
}

export default DriverMessengerData;
