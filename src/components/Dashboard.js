import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import TimerList from './TimerList';
import uuid from 'uuid';
import { newTimer } from '../helpers';
import * as client from '../client';

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
        }
      ]
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
    setInterval(this.loadTimersFromServer, 5000);
  }

  loadTimersFromServer() {
    client.getTimers((serverTimers) => (
            this.setState({
              timers: serverTimers
            })
        )
    );
  }

  handleCreateFormSubmit(timer) {
    this.createTimer(timer);
  }

  createTimer(timer) {
    const t = newTimer(timer);

    this.setState({
      timers: this.state.timers.concat(t),
    });

    client.createTimer(t);
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

    client.updateTimer(attrs);
  }

  handleTrashClick(id) {
    this.deleteTimer(id);
  }

  deleteTimer(id) {
    this.setState({
      timers: this.state.timers.filter((timer) => timer.id !== id),
    });

    client.deleteTimer({ id });
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
    client.startTimer({ id: timerId, start: now });
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

    client.stopTimer({ id: timerId, stop: now })
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
