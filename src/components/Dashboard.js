import React, { Component } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import TimerList from './TimerList';
import AddTimerForm from './AddTimerForm';
import uuid from 'uuid';
import { newTimer } from '../helpers';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timers: [
        {
          title: 'Practice squat',
          project: 'Gym Chores',
          id: uuid.v4(),
          elapsed: 5456099,
          runningSince: Date.now(),
        },
        {
          title: 'Bake squash',
          project: 'Kitchen Chores',
          id: uuid.v4(),
          elapsed: 1273998,
          runningSince: null,
        }
      ]
    };

    this.handleCreateFormSubmit = this.handleCreateFormSubmit.bind(this);
  }

  handleCreateFormSubmit(timer) {
    this.createTimer(timer);
  }

  createTimer(timer) {
    const t = newTimer(timer);

    this.setState({
      timers: this.state.timers.concat(t),
    });
  }

  render() {
    return (
        <Grid columns={3} centered padded={true}>
          <GridColumn>
            <TimerList timers={this.state.timers} />
            <AddTimerForm onFormSubmit={this.handleCreateFormSubmit} />
          </GridColumn>
        </Grid>
    );
  }
}

export default Dashboard;
