import React, { Component } from 'react';
import TimerScreen from './TimerScreen';
import TimerForm from './TimerForm';

class Timer extends Component {
  render() {
    if (this.props.editFormOpen) {
      return (
          <TimerForm
              title={this.props.title}
              project={this.props.project}
          />
      );
    } else {
      return (
        <TimerScreen
            title={this.props.title}
            project={this.props.project}
            elapsed={this.props.elapsed}
            runningSince={this.props.runningSince}
        />
      );
    }
  }
}

export default Timer;
