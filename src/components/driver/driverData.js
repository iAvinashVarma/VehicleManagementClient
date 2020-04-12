import React, { Component } from 'react';
import * as DriverServices from './driver.service';

class DriverData extends Component {
    
    onDeleteClick = (id) => {
        DriverServices.deleteDriverDetails(id)
        .then(res => {
            console.log('Response from server is :: ', res);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        const { _id: id, name, age, phone, identity } = this.props.data;
        return (
            <tr id={id}>
                <td>{name}</td>
                <td>{age}</td>
                <td>{phone}</td>
                <td>{identity}</td>
                <td>
                    <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                    <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                    <a class="delete" title="Delete" data-toggle="tooltip" onClick={this.onDeleteClick(id)}><i class="material-icons">&#xE872;</i></a>
                </td>
            </tr>
        )
    }
}

export default DriverData;
