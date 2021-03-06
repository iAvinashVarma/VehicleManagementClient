import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home/home';
import AddDriver from './driver/addDriver';
import EditDriver from './driver/editDriver';
import Driver from './driver/driver';

import AddVehicle from './vehicle/addVehicle';
import EditVehicle from './vehicle/editVehicle';
import Vehicle from './vehicle/vehicle';

import AddDriverMessenger from './driverMessenger/addDriverMessenger';
import EditDriverMessenger from './driverMessenger/editDriverMessenger';
import DriverMessenger from './driverMessenger/driverMessenger';

import AddVehicleMonitor from './vehicleMonitor/addVehicleMonitor';
import EditVehicleMonitor from './vehicleMonitor/editVehicleMonitor';
import VehicleMonitor from './vehicleMonitor/vehicleMonitor';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/driver/add" component={AddDriver} />
    <Route exact path="/driver/edit/:id" component={EditDriver} />
    <Route path="/vehicle/add" component={AddVehicle} />
    <Route path="/vehicle/edit/:id" component={EditVehicle} />
    <Route path="/driverMessenger/add" component={AddDriverMessenger} />
    <Route path="/driverMessenger/edit/:id" component={EditDriverMessenger} />
    <Route path="/vehicleMonitor/add" component={AddVehicleMonitor} />
    <Route path="/vehicleMonitor/edit/:id" component={EditVehicleMonitor} />
    <Route path="/driver" component={Driver} />
    <Route path="/vehicle" component={Vehicle} />
    <Route path="/driverMessenger" component={DriverMessenger} />
    <Route path="/vehicleMonitor" component={VehicleMonitor} />
  </Switch>
)

export default Main;
