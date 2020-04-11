import React, { Component } from 'react';
import Header from '../layout/header';
import VehicleMonitorData from './vehicleMonitorData';

class VehicleMonitor extends Component {
  render() {
    return(
      <div>
        <Header title="Vehicle Monitor"/>
        <VehicleMonitorData/>
      </div>
    )
  }
}

export default VehicleMonitor;
