import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Header extends Component {
    render() {
        return (
            <div className="header-body">
                <Grid className="header-grid">
                    <Cell col={12}>
                        <h2>{this.props.title}</h2>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Header;
