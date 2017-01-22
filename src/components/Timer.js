import React, { Component } from 'react';
import TimerScreen from './TimerScreen';
import TimerForm from './TimerForm';

class Timer extends Component {
  constructor(props) {
    super();
    this.state = {
      editFormOpen: false
    }
  }

  render() {
    if (this.props.editFormOpen) {
      return (
          <TimerForm
              id={this.props.id}
              title={this.props.title}
              project={this.props.project}
          />
      );
    } else {
      return (
        <TimerScreen
            id={this.props.id}
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
