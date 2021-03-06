# Vehicle Management System Client

Vehicle Management System Client that allows the user to create, update and delete vehicles and it's tracking related entities from it.

[![Build Status](https://dev.azure.com/iavivarma/VehicleManagementSystem/_apis/build/status/iAvinashVarma.VehicleManagementClient?branchName=master)](https://dev.azure.com/iavivarma/VehicleManagementSystem/_build/latest?definitionId=4&branchName=master)
[![Deployment Status](https://vsrm.dev.azure.com/iavivarma/_apis/public/Release/badge/49dd5415-fdd4-42f2-b60a-2d10d095065d/3/3)](https://dev.azure.com/iavivarma/VehicleManagementSystem/_release?view=all&_a=releases&definitionId=3)
[![Azure Application Status](https://img.shields.io/website?down_color=lightgrey&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Fvehiclemanagementsystemclient.azurewebsites.net)](https://vehiclemanagementsystemclient.azurewebsites.net/)
[![Firebase Application Status](https://img.shields.io/website?down_color=lightgrey&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Fvehiclemanagementsystemclient.web.app)](https://vehiclemanagementsystemclient.web.app/)

---

## Client - Web Interface Guide

### View and Add Vehicle

![](images/guide/VehicleManagementSystem-VehicleCreation.gif)

### View and Add Driver

![](images/guide/VehicleManagementSystem-DriverCreation.gif)

### View and Add Vehicle Monitor Data

![](images/guide/VehicleManagementSystem-VehicleMonitorCreation.gif)

### View and Add Driver Message

![](images/guide/VehicleManagementSystem-DriverMessageCreation.gif)

---

## Entity Relationship

![](images/VMSEntityRelationship.jpg)

---

## DevOps Flow

![](images/VMSDevOps.jpg)

---

## Run Client

### Run Dev Environment

```bash
$ npm install
$ npm start
```

### Run Prod Environment - Static Server

```bash
$ npm install -g serve
$ npm run build
$ server -s build 
```

------

## Firebase

### Firebase Configuration

```bash
$ npm install firebase-tools -g
$ firebase login
$ firebase init
```

### Firebase Deployment

```bash
$ npm install
$ npm run build
$ firebase deploy
```

---

## Things to improve

### Client Side

- [ ] Login and SingUp Page 
- [ ] Add roles like Admin, Manager, Driver 
- [ ] Add Pagination, Sorting and Filter
- [ ] More responsive UI
- [ ] UI Testing
- [ ] Code Security and analysis

### Server Side

- [ ] Token based authentication
- [ ] User Entity
- [ ] Moq Tests
- [ ] Data Driven Tests
- [ ] Code Security and analysis

---

## Why Web API and React.

* Web APIs provides a flexible way to communicate with context-based applications that can interact with the physical world, instead only through the UI.
    * Vehicle Management System is expected to get the data from various devices which would be docked in different locations like Vehicle, Freezer, etcetera. Web API would be a right choice to consider for one of the reason and it supports wide range of IOT devices.
* React is one of the modern JavaScript frameworks which allows developer to create large scale web application that can exchange the data. React provides better performance compared to other JavaScript frameworks.

---

## Technical Stack

### Client

 Tools & Technologies |  |
--- | --- |
Front End | ReactJS |
Programming Language | JavaScript |
Responsive UI Framework | Material, Bootstrap |
Data Exchange | json |
Server | NodeJs |
DevOps | Azure DevOps |
Cloud | Azure App Service, Firebase |
Source Control | GitHub |
Other Web | HTML, CSS |

### Server

 Tools & Technologies |  |
--- | --- |
Programming Language | C# |
Data Exchange | json |
Database | MongoDB (Configurable to other DB) |
Server | ASP NET WebAPI |
DevOps | Azure DevOps |
Cloud | Azure App Service |
API Testing | PostMan |
Source Control | GitHub |
