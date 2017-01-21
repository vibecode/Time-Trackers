import React, { Component } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import TimerList from './TimerList';
import AddTimerForm from './AddTimerForm';

class Dashboard extends Component {
  render() {
    return (
      <Grid columns={3} centered>
        <GridColumn>
          <TimerList />
          <AddTimerForm isOpen={false} />
        </GridColumn>
      </Grid>
    );
  }
}

export default Dashboard;