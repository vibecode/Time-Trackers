import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import TimerList from './TimerList';
import uuid from 'uuid';
import * as client from '../client';
import _ from 'lodash';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timers: []
    };

    this.handleCreateFormSubmit = this.handleCreateFormSubmit.bind(this);
    this.handleEditFormSubmit = this.handleEditFormSubmit.bind(this);
    this.handleTrashClick = this.handleTrashClick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
    this.loadTimersFromServer = this.loadTimersFromServer.bind(this);
  }

  componentDidMount() {
    this.loadTimersFromServer();
  }

  loadTimersFromServer() {
    client.getTimers((data) => {
      const timers = _.map(data, item => item);
      timers.sort((a, b) => b.created - a.created);
      this.setState({ timers });
    });
  }

  handleCreateFormSubmit(timer) {
    this.createTimer(timer);
  }

  createTimer(attrs = {}) {
    const now = Date.now();

    const timer = {
      title: attrs.title || 'Title',
      project: attrs.project || 'Project',
      id: uuid.v4(),
      elapsed: 0,
      created: now
    };

    this.setState({
      timers: this.state.timers.concat(timer),
    });

    client.saveTimer(timer);
  }

  handleEditFormSubmit(attrs) {
    this.updateTimer(attrs);
  }

  updateTimer(attrs) {
    const { id, title, project } = attrs;

    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === id) {
          return { ...timer, title, project }
        } else {
          return timer;
        }
      }),
    });

    client.updateTimer(attrs);
  }

  handleTrashClick(id) {
    this.deleteTimer(id);
  }

  deleteTimer(id) {
    this.setState({
      timers: this.state.timers.filter((timer) => timer.id !== id),
    });
    client.deleteTimer(id);
  }

  handleStartClick(timerId) {
    this.startTimer(timerId);
  }

  handleStopClick(timerId) {
    this.stopTimer(timerId);
  }

  startTimer(id) {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === id) {
          return { ...timer, runningSince: now };
        } else {
          return timer;
        }
      }),
    });

    client.startTimer({ id, runningSince: now });
  }

  stopTimer(timerId) {
    const now = Date.now();
    let elapsed = 0;

    this.state.timers.forEach((timer) => {
      if (timer.id === timerId) {
        const lastElapsed = now - timer.runningSince;
        elapsed = timer.elapsed + lastElapsed;
      }
    });

    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          return { ...timer, elapsed, runningSince: null };
        } else {
          return timer;
        }
      }),
    });

    client.stopTimer({ id: timerId, elapsed: elapsed })
  }

  render() {
    return (
        <Container className='content'>
          <TimerList
              timers={this.state.timers}
              onFormSubmit={this.handleEditFormSubmit}
              onTrashClick={this.handleTrashClick}
              onStartClick={this.handleStartClick}
              onStopClick={this.handleStopClick}
              onAddTimerFormClick={this.handleCreateFormSubmit}
          />
        </Container>
    );
  }
}

export default Dashboard;
