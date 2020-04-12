import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home/home';
import Driver from './driver/driver';
import AddDriver from './driver/addDriver';
import AddVehicle from './vehicle/addVehicle';
import AddDriverMessenger from './driverMessenger/addDriverMessenger';
import Vehicle from './vehicle/vehicle';
import DriverMessenger from './driverMessenger/driverMessenger';
import VehicleMonitor from './vehicleMonitor/vehicleMonitor';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/driver/add" component={AddDriver} />
    <Route path="/vehicle/add" component={AddVehicle} />
    <Route path="/driverMessenger/add" component={AddDriverMessenger} />
    <Route path="/driver" component={Driver} />
    <Route path="/vehicle" component={Vehicle} />
    <Route path="/driverMessenger" component={DriverMessenger} />
    <Route path="/vehicleMonitor" component={VehicleMonitor} />
  </Switch>
)

export default Main;
