import React, { Component } from 'react';
import TimerForm from './TimerForm';
import { Segment, Button } from 'semantic-ui-react';

class AddTimerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleFormOpen = this.handleFormOpen.bind(this);
    this.handleFormClose = this.handleFormClose.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormOpen() {
    this.setState({
      isOpen: true
    });
  }

  handleFormClose() {
    this.setState({
      isOpen: false
    });
  }

  handleFormSubmit(timer) {
    this.props.onFormSubmit(timer);
    this.setState({
      isOpen: false
    });
  }

  render() {
    if (this.state.isOpen) {
      return (
          <TimerForm
              onFormSubmit={this.handleFormSubmit}
              onFormClose={this.handleFormClose} />
      )
    } else {
      return (
          <Segment basic className='content center aligned'>
            <Button basic icon={'plus square'} onClick={this.handleFormOpen} />
          </Segment>
      );
    }
  }
}

export default AddTimerForm;
