import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class TimerActionButton extends Component {

  render() {
    if (this.props.timerIsRunning) {
      return (
          <Button
              fluid
              basic
              content='Stop'
              color='violet'
              onClick={this.props.onStopClick}
          />
      );
    } else {
      return (
          <Button
              fluid
              basic
              content='Start'
              color='violet'
              onClick={this.props.onStartClick}
          />
      );
    }
  }
}

export default TimerActionButton;
