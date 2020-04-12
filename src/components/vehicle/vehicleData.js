import React, { Component } from 'react';

class VehicleData extends Component {

    onDeleteClick = (id) => {

    }

    render() {
        const { _id: id, name, registrationNumber } = this.props.data;
        return (
            <tr id={id}>
                <td>{name}</td>
                <td>{registrationNumber}</td>
                <td>
                    <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                    <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                    <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                </td>
            </tr>
        )
    }
}

export default VehicleData;
