import React, { Component } from 'react';

class VehicleMonitorData extends Component {
  
  onDeleteVehicleMonitor(vehicleMonitor) {
      this.props.onDeleteVehicleMonitor(vehicleMonitor);
  }

  render() {
    const { _id: id, vehicle, driver, vehicleMonitor } = this.props.data;
    return(
      vehicle && driver && <tr id={id}>
          <td>{vehicle.name}</td>
          <td>{driver.name}</td>
          
          <td><a href={'http://www.google.com/maps/place/' + vehicleMonitor.location.latitude + ',' + vehicleMonitor.location.longitude} target='_blank'>{vehicleMonitor.location.latitude + ',' + vehicleMonitor.location.longitude}</a></td>
          <td>{vehicleMonitor.pressure.pressurePsi}</td>
          <td>{vehicleMonitor.temperature.temperatureCelsius}</td>
          <td>
              <a className="edit" title="Edit" href={'/vehicleMonitor/edit/' + id} data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
              <a className="delete" title="Delete" onClick={this.onDeleteVehicleMonitor.bind(this, this.props.data)} data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a>
          </td>
      </tr>
    )
  }
}

export default VehicleMonitorData;
