import React, { Component } from 'react';
import TimerForm from './TimerForm';
import { Segment, Button } from 'semantic-ui-react';

class AddTimerForm extends Component {
  render() {
    if (this.props.isOpen) {
      return <TimerForm />
    } else {
      return (
          <Segment basic className='content center aligned'>
            <Button basic icon={'plus square'} />
          </Segment>
      );
    }
  }
}

export default AddTimerForm;
