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
        }
      ]
    };

    this.handleCreateFormSubmit = this.handleCreateFormSubmit.bind(this);
    this.handleEditFormSubmit = this.handleEditFormSubmit.bind(this);
    this.handleTrashClick = this.handleTrashClick.bind(this);
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

  handleEditFormSubmit(attrs) {
    this.updateTimer(attrs);
  }

  updateTimer(attrs) {
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project,
          });
        } else {
          return timer;
        }
      }),
    });
  }

  handleTrashClick(id) {
    this.deleteTimer(id);
  }

  deleteTimer(id) {
    this.setState({
      timers: this.state.timers.filter((timer) => timer.id !== id),
    });
  }

  render() {
    return (
        <Grid columns={3} centered padded={true}>
          <GridColumn>
            <TimerList
                timers={this.state.timers}
                onFormSubmit={this.handleEditFormSubmit}
                onTrashClick={this.handleTrashClick}
            />
            <AddTimerForm onFormSubmit={this.handleCreateFormSubmit} />
          </GridColumn>
        </Grid>
    );
  }
}

export default Dashboard;
