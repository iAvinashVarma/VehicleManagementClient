import React, { Component } from 'react';

class VehicleMonitorData extends Component {
  onDeleteClick = (id) => {

  }
  render() {
    const { vehicle, driver, vehicleMonitor } = this.props.data;
    return(
      <tr id={driverMessage._id}>
          <td>{vehicle.name}</td>
          <td>{driver.name}</td>
          <td>{vehicleMonitor.location.latitude}</td>
          <td>{vehicleMonitor.location.longitude}</td>
          <td>{vehicleMonitor.pressure.pressurePsi}</td>
          <td>{vehicleMonitor.temperature.temperatureCelsius}</td>
          <td>
              {/* <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a> */}
              <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
              <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
          </td>
      </tr>
    )
  }
}

export default VehicleMonitorData;
