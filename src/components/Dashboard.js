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
          title: 'Task Title',
          project: 'Project name',
          id: uuid.v4(),
          elapsed: 0,
          runningSince: Date.now(),
        }
      ]
    };

    this.handleCreateFormSubmit = this.handleCreateFormSubmit.bind(this);
    this.handleEditFormSubmit = this.handleEditFormSubmit.bind(this);
    this.handleTrashClick = this.handleTrashClick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
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

  handleStartClick(timerId) {
    this.startTimer(timerId);
  }

  handleStopClick(timerId) {
    this.stopTimer(timerId);
  }

  startTimer(timerId) {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          return Object.assign({}, timer, {
            runningSince: now,
          });
        } else {
          return timer;
        }
      }),
    });
  }

  stopTimer(timerId) {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          return Object.assign({}, timer, {
            elapsed: timer.elapsed + lastElapsed,
            runningSince: null,
          });
        } else {
          return timer;
        }
      }),
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
                onStartClick={this.handleStartClick}
                onStopClick={this.handleStopClick}
            />
            <AddTimerForm onFormSubmit={this.handleCreateFormSubmit} />
          </GridColumn>
        </Grid>
    );
  }
}

export default Dashboard;
