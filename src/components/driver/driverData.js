import React, { Component } from 'react';

class DriverData extends Component {

    render() {
        const { _id: id, name, age, phone, identity } = this.props.data;
        return (
            <tr id={id}>
                <td>{name}</td>
                <td>{age}</td>
                <td>{phone}</td>
                <td>{identity}</td>
                <td>
                    <a class="edit" title="Edit" href={'/driver/edit/' + id} data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                    <a class="delete" title="Delete" href={'/driver/delete/' + id} data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                </td>
            </tr>
        )
    }
}

export default DriverData;
