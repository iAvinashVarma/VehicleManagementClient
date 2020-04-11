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
              <h1>VMS</h1>

              <hr />

              <p>Driver | Vehicle | Vehical Monitor | Driver Messenger</p>

              <div className="social-links">

                <a href="/driver" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-user-o" aria-hidden="true" />
                </a>

                <a href="/vehicle" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-bus" aria-hidden="true" />
                </a>

                <a href="/vehicle" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-television" aria-hidden="true" />
                </a>

                <a href="/driver" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-comments-o" aria-hidden="true" />
                </a>

              </div>
              <br />
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Home;
