import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <br />
            <br />
            <br />
            <div className="banner-text">
              <br />
              <h1><i className="fa fa-truck" aria-hidden="true" /> VMS</h1>
              <hr />
              <p><Link to="/vehicle"><i className="fa fa-bus" aria-hidden="true" /> Vehicle</Link></p>
              <p><Link to="/driver"><i className="fa fa-user-o" aria-hidden="true" /> Driver</Link></p>
              <p><Link to="/vehicleMonitor"><i className="fa fa-television" aria-hidden="true" /> Vehicle Monitor</Link></p>
              <p><Link to="/driverMessenger"><i className="fa fa-comments-o" aria-hidden="true" /> Driver Messages</Link></p>
              <br />
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Home;
