import React, { Component } from 'react';

class DriverMessengerData extends Component {

    onDeleteClick = (id) => {
        
    }

    render() {
        const { _id: id, vehicle, driver, driverMessage } = this.props.data;
        return (
            vehicle && driver && <tr id={id}>
                <td>{vehicle.name}</td>
                <td>{driver.name}</td>
                <td>{driverMessage.message}</td>
                <td>
                    <a class="edit" title="Edit" href={'/driverMessenger/edit/' + id} data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                    <a class="delete" title="Delete" href={'/driverMessenger/delete/' + id} data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                </td>
            </tr>
        )
    }
}

export default DriverMessengerData;
