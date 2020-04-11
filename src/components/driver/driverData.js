import React, { Component } from 'react';
import { Table, TableHeader } from 'react-mdl';

class DriverData extends Component {
    render() {
        return (
            <div class="mdl-grid">
                <div class="mdl-layout-spacer"></div>
                <div class="mdl-cell mdl-cell--4-col">
                    <Table
                        sortable
                        shadow={0}
                        rows={[
                            { name: 'Enrique', age: 25, phone: '22078911', identity: 'Nz011' },
                            { name: 'Xi', age: 50, phone: '22078912', identity: 'Nz013' },
                            { name: 'Putin', age: 10, phone: '22078913', identity: 'Nz012' }
                        ]}
                    >
                        <TableHeader
                            name="name"
                            sortFn={(a, b, isAsc) => (isAsc ? a : b).match(/\((.*)\)/)[1].localeCompare((isAsc ? b : a).match(/\((.*)\)/)[1])}
                            tooltip="Driver Name"
                        >
                            Name
              </TableHeader>
                        <TableHeader
                            numeric
                            name="age"
                            tooltip="Driver Age"
                        >
                            Age
              </TableHeader>
                        <TableHeader
                            numeric
                            name="phone"
                            tooltip="Driver Phone"
                        >
                            Phone
              </TableHeader>
                        <TableHeader
                            numeric
                            name="identity"
                            tooltip="Driver Identity"
                        >
                            Identity
              </TableHeader>
                    </Table>
                </div>
                <div class="mdl-layout-spacer"></div>
            </div>
        )
    }
}

export default DriverData;
