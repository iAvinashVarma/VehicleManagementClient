import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/"><i className="fa fa-truck" aria-hidden="true" /> Vehicle Management System</Link>} scroll>
            <Navigation>
              <Link to="/vehicle"><i className="fa fa-bus" aria-hidden="true" /> Vehicle</Link>
              <Link to="/driver"><i className="fa fa-user-o" aria-hidden="true" /> Driver</Link>
              <Link to="/vehicleMonitor"><i className="fa fa-television" aria-hidden="true" /> Vehicle Monitor</Link>
              <Link to="/driverMessenger"><i className="fa fa-comments-o" aria-hidden="true" /> Driver Messages</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/"><i className="fa fa-truck" aria-hidden="true" /> VMS</Link>}>
            <Navigation>
              <Link to="/vehicle"><i className="fa fa-bus" aria-hidden="true" /> Vehicle</Link>
              <Link to="/driver"><i className="fa fa-user-o" aria-hidden="true" /> Driver</Link>
              <Link to="/vehicleMonitor"><i className="fa fa-television" aria-hidden="true" /> Vehicle Monitor</Link>
              <Link to="/driverMessenger"><i className="fa fa-comments-o" aria-hidden="true" /> Driver Messages</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
