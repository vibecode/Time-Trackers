import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/components/button.css';

class TimerActionButton extends Component {

  render() {
    if (this.props.timerIsRunning) {
      return (
          <Button
              fluid
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
