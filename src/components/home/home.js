import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


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
              <p><i className="fa fa-bus" aria-hidden="true" /> Vehicle </p>
              <p><i className="fa fa-user-o" aria-hidden="true" /> Driver</p>
              <p><i className="fa fa-television" aria-hidden="true" /> Vehical Monitor </p>
              <p><i className="fa fa-comments-o" aria-hidden="true" /> Driver Messenger</p>
              <br />
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Home;
