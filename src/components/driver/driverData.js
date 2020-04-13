import React, { Component } from 'react';

class DriverData extends Component {

    onDeleteDriver(driver) {
        this.props.onDeleteDriver(driver);
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
                    <a className="edit" title="Edit" href={'/driver/edit/' + id} data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                    <a className="delete" title="Delete" onClick={this.onDeleteDriver.bind(this, this.props.data)} data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a>
                </td>
            </tr>
        )
    }
}

export default DriverData;
