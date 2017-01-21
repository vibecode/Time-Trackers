import React, { Component } from 'react';
import { Grid, GridRow } from 'semantic-ui-react';
import TimerList from './TimerList';
import TimerForm from './TimerForm';

class Dashboard extends Component {
  render() {
    return (
      <Grid columns={3} centered>
        <GridRow>
          <TimerList />
           <TimerForm isOpen={true} />
        </GridRow>
      </Grid>
    );
  }
}

export default Dashboard;