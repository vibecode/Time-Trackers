import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class TimerActionButton extends Component {

  render() {
    if (this.props.timerIsRunning) {
      return (
          <Button
              basic
              content='Stop'
              color='violet'
              attached='bottom'
              onClick={this.props.onStopClick}
          />
      );
    } else {
      return (
          <Button
              basic
              content='Start'
              color='violet'
              attached='bottom'
              onClick={this.props.onStartClick}
          />
      );
    }
  }
}

export default TimerActionButton;
